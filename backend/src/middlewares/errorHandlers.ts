import { Request, Response, NextFunction } from "express";

export class AuthError extends Error {
  message: string;
  code: 403 | 401;

  constructor(message: string, code: 403 | 401) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
export class NotFoundError extends Error {
  message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // here we could log the error to a service like Sentry
  console.error(err);

  if (err instanceof AuthError) {
    res.status(err.code).json({ error: err.message });
  }

  if (err instanceof NotFoundError) {
    res.status(404).json({ error: err.message });
  }

  // Set the status code and error message
  res.status(500).json({ error: "Internal Server Error" });
};

export default errorHandler;
