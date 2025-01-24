import { Request, Response } from "express";

import { RouteMap } from "../types";

import { HttpError } from "./errorHandler";
import { ctrlWrapper } from "./ctrlWrapper";

export const handleRequest = (
  routesMap: RouteMap[],
  req: Request,
  res: Response
) => {
  let matchedRoute: RouteMap | null = null;
  let methodAllowed: Boolean = false;

  for (const route of routesMap) {
    if (route.path === req.originalUrl) {
      matchedRoute = route;
      if (matchedRoute.method === req.method) {
        methodAllowed = true;
        break;
      }
    }
  }

  if (!matchedRoute) {
    HttpError(404, req, res);
    return;
  }

  if (!methodAllowed) {
    console.log("Method not allowed for route:", req.method, req.originalUrl);
    HttpError(405, req, res);
    return;
  }

  ctrlWrapper(matchedRoute.controller)(req, res);
};
