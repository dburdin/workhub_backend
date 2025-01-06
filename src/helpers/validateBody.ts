import { Request, Response } from "express";
import { ObjectSchema } from "joi";

import { HttpError } from "./errorHandler";

export const validateBody = async (
  req: Request,
  res: Response,
  schema: ObjectSchema
) => {
  try {
    await schema.validateAsync(req.body);
    return true;
  } catch (error) {
    HttpError(400, req, res);
    return false;
  }
};
