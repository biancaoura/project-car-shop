import { ErrorRequestHandler } from 'express';
import HttpError from '../Utils/HttpError';

export default class ErrorMiddleware extends Error {
  public static error: ErrorRequestHandler = (err, _req, res, _next) => {
    const { message } = err;

    if (err instanceof HttpError) {
      return res.status(err.status).json({ message });
    }

    return res.json({ message });
  };
}