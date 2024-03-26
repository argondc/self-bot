require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const closeSelfBot = () => {
    console.log('Não existem mensagens para serem deletadas. Encerrando self-bot!');
    process.exit();
}

client.once('ready', async () => {
    console.log(`Usuário ${client.user.username} conectado!`);
});

client.on('messageCreate', async message => {
    const channel = message.channel;
    if (channel.type !== 'voice' &&
        channel.type !== 'category' &&
        channel.type !== 'news' &&
        channel.type !== 'store' &&
        message.content.includes('!argon')) {
        try {
            channel.messages.fetch().then(async messages => {
                const deleteMessagesWithInterval = async () => {
                    const queueMessages    = Array.from(messages.values());
                    const delayInterval    = Number(process.env.DELAY_QUEUE);
                    const quantityMessages = Number(process.env.QUANTITY_MESSAGES);
                    let   index            = 0;

                    const deleteNextQueue = async () => {
                        const chunk = queueMessages.slice(index, index + quantityMessages);
                        index += quantityMessages;
                        for (const msg of chunk) {
                            try {
                                await msg.delete();
                                console.log(`Mensagem deletada! Conteúdo: ${msg.content}`);
                            } catch (error) {
                                console.log(`Problema ao deletar a mensagem, erro: ${error}`);
                            }
                        }

                        index < queueMessages.length ? setTimeout(deleteNextQueue, delayInterval) : closeSelfBot();
                    };

                    await deleteNextQueue();
                };

                await deleteMessagesWithInterval();
            });
        } catch (e) {
            console.log(`Problema ao encontrar as mensagens da dm, erro: ${e}`);
        }
    }
});

client.login(process.env.TOKEN);