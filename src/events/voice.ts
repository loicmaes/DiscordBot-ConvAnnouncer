import {IEvent} from "../types/event";
import {Client} from "../types/client";
import {findChannel, sendMessage} from "../utils";
import {ColorResolvable, EmbedBuilder, TextChannel} from "discord.js";

export default {
  name: "voiceStateUpdate",
  callback: async (client: Client, oldState, newState) => {
    if (!newState.channel || oldState.channel?.id === newState.channel.id) return;

    let members = newState.channel.members.map((k, v) => ({ k, v }));
    if (members.length !== 1) return;

    await sendMessage(
        await findChannel<TextChannel>(client, client.devGuildId, client.notifyChannelId),
        {
          content: '|| @everyone ||',
          embeds: [
            new EmbedBuilder()
                .setColor(client.color as ColorResolvable)
                .setDescription(`<@${newState.id}> a lancé un appel ! :tada:`)
                .setFooter({
                  text: 'Appel lancé'
                })
                .setTimestamp()
          ]
        },
    );
  },
} as IEvent;
