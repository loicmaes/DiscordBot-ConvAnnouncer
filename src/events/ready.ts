import {Client} from "../types/client";
import {ColorResolvable, EmbedBuilder, TextChannel} from "discord.js";
import {findChannel, sendMessage} from "../utils";
import {IEvent} from "../types/event";

export default {
  name: "ready",
  once: true,
  callback: async (client: Client) => {
    if (!client.devGuildId || !client.notifyChannelId || !client.welcomeMessage) return;

    await sendMessage(await findChannel(client, client.devGuildId, client.notifyChannelId) as TextChannel, {
      content: "",
      embeds: [
          new EmbedBuilder()
              .setColor(client.color as ColorResolvable)
              .setTitle("Re-bonjour vous 👋")
              .setDescription(`Dite bonjour à Carlos ! Votre nouveau meilleur ami pour vos appels endiablés.

Je vois tout, j'écoute tout ! Regarde par ici :point_right: <#${client.watchChannelId}> :eyes:`)
      ]
    })
  },
} as IEvent;
