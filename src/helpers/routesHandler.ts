import { Request, Response } from "express";

import { RouteMap } from "../types";

import { HttpError } from "./errorHandler";
import { ctrlWrapper } from "./ctrlWrapper";

export const handleRequest = (
  routesMap: RouteMap[],
  req: Request,
  res: Response
) => {
  const currentRoute = routesMap.find((route) => route.url === req.originalUrl);

  if (!currentRoute) {
    HttpError(400, req, res);
    return;
  }

  if (currentRoute.method !== req.method) {
    HttpError(405, req, res);
  }

  ctrlWrapper(currentRoute.controller);
};
