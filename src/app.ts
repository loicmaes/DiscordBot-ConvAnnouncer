import { config } from "dotenv";
import {Client} from "./types/client";

config();

new Client({
  token: process.env.TOKEN ?? "",
  color: process.env.COLOR,
  thumbnail: process.env.THUMBNAIL,

  devGuildId: process.env.DEV_GUILD,
  watchChannelId: process.env.WATCH_CHANNEL,
  notifyChannelId: process.env.MENTION_CHANNEL,

  welcomeMessage: process.env.WELCOME_MESSAGE === "true"
});
