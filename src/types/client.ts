import * as Discord from "discord.js";
import { registerCommands, registerEvents, registerComponents } from "../handlers/runtimeHandler";

export interface ClientConfiguration {
  token: string;
  color?: string;
  thumbnail?: string;
  devGuildId?: string;
  watchChannelId?: string;
  notifyChannelId?: string;
  welcomeMessage?: boolean;
}

export class Client extends Discord.Client {
  token: string;
  color: string;
  thumbnail: string;

  devGuildId?: string;
  watchChannelId?: string;
  notifyChannelId?: string;
  welcomeMessage: boolean;

  constructor(config: ClientConfiguration) {
    super({
      intents: 32767,
    });

    this.token = config.token;
    this.color = config.color || "#2563eb";
    this.thumbnail = config.thumbnail || "https://images.pexels.com/photos/5244033/pexels-photo-5244033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    this.devGuildId = config.devGuildId;
    this.watchChannelId = config.watchChannelId;
    this.notifyChannelId = config.notifyChannelId;

    this.welcomeMessage = config.welcomeMessage ?? true;

    this.start().then();
  }

  async start() {
    await registerCommands(this);
    await registerComponents(this);
    await registerEvents(this);

    if (!this.token) throw new Error("No token provided!");

    this.login(this.token)
        .then(_ => console.log(`----\nLogged in as ${this.user.tag}`));
  }
}
