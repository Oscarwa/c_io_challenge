import express, { Express, json, NextFunction, Request, Response } from "express";
const morgan = require('morgan');
import customerRoutes from './customers/customer.routes';

const app: Express = express();

// Config middleware
app.use(morgan("dev"));
app.use(json());

// config routes
app.use("/customers", customerRoutes);

// Default route
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Resource not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Error handling
app.use((error: any, _req: any, res: any, _next: any) => {
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  return res.json({
    message: error.message,
    stack: error.stack,
  });
});

/**
 * Initializes the http server on the given port
 * @param {number} port the port on which you want your server to listen
 */
const init = (port: number) => {
  app.listen(port, () => {
    console.info(`Server running on port: ${port}`);
  });
};

export default init;
