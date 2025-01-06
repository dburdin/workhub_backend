import { Request, Response } from "express";
import { HttpError } from "./errorHandler";

export const ctrlWrapper = (ctrl: any) => {
  const func = async (req: Request, res: Response) => {
    try {
      await ctrl(req, res);
    } catch (error) {
      HttpError(500, req, res);
    }
  };

  return func;
};
