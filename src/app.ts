import { loadFiles } from "./handlers/fileHandler";
import { config } from "dotenv";
import {Client} from "./types/client";

config();

const app = new Client({
  token: process.env.TOKEN ?? "",
  color: process.env.COLOR,
  thumbnail: process.env.THUMBNAIL,
});
