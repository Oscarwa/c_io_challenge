import { add, getAll } from "../db";
import Customer, { ICustomer } from "./customer.model";

const customers: ICustomer[] = []

const getCustomers = (): ICustomer[] | null => {
    const data = getAll();
    return data;
}

const addCustomer = (model: Customer): ICustomer | null => {
    const customer = add(model);
    return customer;
}

export { getCustomers, addCustomer }