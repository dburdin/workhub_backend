import { onRequest } from "firebase-functions/https";
import { setGlobalOptions } from "firebase-functions";
import { Request, Response } from "firebase-functions/v1";

import { corsMiddleware } from "./middlewares";
import { routesMap } from "./routes";
import { handleRequest } from "./helpers";

import { GLOBAL_OPTIONS } from "./firestore";

setGlobalOptions(GLOBAL_OPTIONS);

export const api = onRequest((req: Request, res: Response) => {
  return corsMiddleware(req, res, async () => {
    handleRequest(routesMap, req, res);
  });
});
