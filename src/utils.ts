import {TextChannel} from "discord.js";
import {Client} from "./types/client";

export async function findChannel<T>(client: Client, guildId: string, channelId: string): Promise<T> {
  const guild = client.guilds.cache.find(g => g.id === guildId);
  const channel = await guild.channels.fetch(channelId);
  if (!channel) throw new Error("Channel not found in the provided guild!");
  return channel as T;
}
export async function sendMessage(channel: TextChannel, message: any) {
  await channel.send(message);
}
