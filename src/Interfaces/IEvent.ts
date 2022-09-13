import {Client} from "discord.js";

export default interface IEvent {
    name: string;
    once?: boolean;
    execute(client: Client, ...args: object[]): any;
}