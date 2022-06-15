import { Request, Response } from "express";
import { add } from "../../db";
import { addCustomer } from "../customer.service";

export default (req: Request, res: Response, next: any): any => {
  if (req.body) {
    const customer = addCustomer(req.body);
    if (customer) {
      return res.json({ data: customer });
    } else {
      return res.json({ error: "error when saving" });
    }
  }
  next();
};
