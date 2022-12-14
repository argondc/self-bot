import IEvent from '../Interfaces/IEvent';
import { Client } from 'discord.js';
import colors from 'colors';

export const event: IEvent = {
    name: 'ready',
    once: true,
    execute(client: Client) {
        console.log(colors.red(`
             ▄▄▄       ██▀███    ▄████  ▒█████   ███▄    █ 
            ▒████▄    ▓██ ▒ ██▒ ██▒ ▀█▒▒██▒  ██▒ ██ ▀█   █ 
            ▒██  ▀█▄  ▓██ ░▄█ ▒▒██░▄▄▄░▒██░  ██▒▓██  ▀█ ██▒
            ░██▄▄▄▄██ ▒██▀▀█▄  ░▓█  ██▓▒██   ██░▓██▒  ▐▌██▒
             ▓█   ▓██▒░██▓ ▒██▒░▒▓███▀▒░ ████▓▒░▒██░   ▓██░
             ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ░▒   ▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
              ▒   ▒▒ ░  ░▒ ░ ▒░  ░   ░   ░ ▒ ▒░ ░ ░░   ░ ▒░
              ░   ▒     ░░   ░ ░ ░   ░ ░ ░ ░ ▒     ░   ░ ░ 
                  ░  ░   ░           ░     ░ ░           ░ 
                     ${colors.cyan(`Conta conectada: `)}${colors.yellow(client.user.tag)}
        `));
    }
}