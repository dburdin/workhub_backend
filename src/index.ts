import { onRequest } from "firebase-functions/https";
import { setGlobalOptions } from "firebase-functions";
import { Request, Response } from "firebase-functions/v1";

export const api = onRequest((req: Request, res: Response) => {});
