import { Request, Response } from "express";
import { ICustomer } from "../customer.model";
import { getCustomers } from "../customer.service";

export default async (req: Request<{id?: string}, {}, ICustomer, {}>, res: Response, next: any): Promise<any> => {
    const customers = await getCustomers();
    res.json({ data: customers })
};