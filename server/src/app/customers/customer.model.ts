export interface ICustomer {
    id: number;
    attributes?: IAttribute[];
    events?: IEvent[];
    last_updated: Date;
}
export interface IAttribute {
    [key: string]: string;
}

export interface IEvent {
    [key: string]: number;
}

export default class Customer implements ICustomer {
    constructor(model: ICustomer) {
        this.id = model.id;
        this.attributes = model.attributes;
        this.events = model.events;
        this.last_updated = model.last_updated;
    }
    id: number;
    attributes?: IAttribute[];
    events?: IEvent[];
    last_updated: Date;
}