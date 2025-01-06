import { Request, Response } from "express";

const errorMap: Record<number, string> = {
  500: "Internal Server Error",
  400: "Bad Request",
  403: "Forbidden",
  404: "Not Found",
  405: "Method not allowed",
};

export const HttpError = (
  status: number,
  req: Request,
  res: Response
): void => {
  const message = errorMap[status];
  res.status(status).send({ message });
};
