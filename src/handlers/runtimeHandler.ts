import {Client} from "../types/client";
import {loadFiles} from "./fileHandler";
import {IEvent} from "../types/event";

export async function registerCommands(client: Client) {
  // todo: later
}
export async function registerEvents(client: Client) {
  const files = loadFiles("./src/events");
  if (!files.length) return console.log("There is no events to load!");

  for (const file of files) {
    const event = (await import(`../events/${file}`)).default as IEvent;
    if (!event.name || !event.callback) throw new Error(`There is a miss config in event '${file}'`);

    event.once
        ? client.once(event.name, event.callback.bind(null, client))
        : client.on(event.name, event.callback.bind(null, client));
  }
}
export async function registerComponents(client: Client) {
  // todo: later
}
