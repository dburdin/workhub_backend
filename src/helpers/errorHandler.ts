import { Request, Response } from "express";

const errorMap: Record<number, string> = {
  500: "Internal Server Error CUSTOM",
  400: "Bad Request CUSTOM",
  403: "Forbidden CUSTOM",
  404: "Not Found CUSTOM",
  405: "Method not allowed CUSTOM",
};

export const HttpError = (
  status: number,
  req: Request,
  res: Response
): void => {
  const message = errorMap[status];
  res.status(status).send({ message });
};
