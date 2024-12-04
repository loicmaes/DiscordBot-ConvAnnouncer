import {Client} from "./client";

export interface IEvent {
  name: string;
  once?: boolean;
  callback: (client: Client, ...args: any) => void;
}
