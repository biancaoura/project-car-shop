import { ErrorRequestHandler } from 'express';

export default class ErrorMiddleware extends Error {
  public static error: ErrorRequestHandler = (err, _req, res, _next) => {
    const { message } = err;
    return res.json({ message });
  };
}