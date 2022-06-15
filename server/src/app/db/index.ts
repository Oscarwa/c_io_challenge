import fs from "fs";
import { ICustomer } from "../customers/customer.model";

const PATH = "./data/db.json";

const data = [];

const getAll = () => {
    const data = _readAll();
    return data;
}

const add = (model: ICustomer) => {
  const data = _readAll();
  if (data) {
    data.push(model);
    _write(data);
    return model;
  }
  return null;
};

const _readAll = (): ICustomer[] | null => {
  try {
    const content = fs.readFileSync(PATH, "utf8");
    return JSON.parse(content);
  } catch (err) {
    console.error(err);
    return null;
  }
};

const _write = async (model: ICustomer[]) => {
  const data = JSON.stringify(model);
  try {
    fs.writeFileSync(PATH, data, { flag: "wx", encoding: "utf8" });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export { getAll, add };
