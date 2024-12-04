import {Client} from "../types/client";

export default {
  name: "ready",
  once: true,
  callback: (client: Client) => {
    console.log("Client is ready!");
  },
};
