interface IEvent {
    name: string;
    once?: boolean;
    execute(...args: any[]): any;
}

export = IEvent;