import { Client, Collection } from 'discord.js';
import IEvent from "../Interfaces/IEvent";
import dotenv = require('dotenv');
import path = require('path');
import {readdirSync} from "fs";
import {EventEmitter} from "events";

dotenv.config({
    path: __dirname + '/../../.env'
});

//Classe principal do self-bot
class Self extends Client {
    //Instância da Client do Discord.js
    private instanceClient: Client = new Client();

    //Collection contendo os eventos carregados
    private events: Collection<string, IEvent> = new Collection();

    /**
     * Armazena o evento na Collection
     * @param event - Objeto do evento a ser armazenado na Collection
     * @return {void}
     */
    private setEvents = (event: IEvent): void => {
        this.events.set(event.name, event);
    }

    /**
     * Verifica se o evento será executado apenas uma vez ou não
     * @param event - Objeto do evento contendo a propriedade a ser verificada
     * @return {EventEmitter} - Retorna uma referência de EventEmitter
     */
    private verifyExecuteEvent = (event: IEvent): EventEmitter => {
        if (event.once) return this.once(event.name, event.execute.bind(this.instanceClient, this));

        return this.on(event.name, event.execute.bind(this.instanceClient, this));
    }

    /**
     * Carrega os eventos
     * @returns {void}
     */
    private loadEvents = async () => {
        const eventsPath = path.join(__dirname, '..', 'Events');

        readdirSync(eventsPath).forEach(file => {
            if (!file.endsWith('.js')) return;

            const event = require(`${eventsPath}/${file}`);

            this.setEvents(event);

            this.verifyExecuteEvent(event);
        });
    }

    /**
     * Inicia o self-bot e realiza login utilizando o token de acesso
     * @return {void}
     */
    public start = async () => {
        this.login(process.env.YOUR_TOKEN);

        await this.loadEvents();
    }
}

export = Self;