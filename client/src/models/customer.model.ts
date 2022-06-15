import { Attribute } from "./attribute.model";
import { Event } from "./event.model";

export interface Customer {
    id: number;
    attributes: Attribute[];
    events: Event[];
    last_updated: Date;
}