import { Request, Response } from "express";

import { db } from "../../firestore";
import { UserScheme } from "../../models";
import { validateBody } from "../../helpers";
import { upload } from "../../middlewares";

export const add = async (req: Request, res: Response) => {
  const isValid = await validateBody(req, res, UserScheme);

  if (!isValid) {
    return;
  }
  upload.single("img");
  await db.collection("users").add({
    ...req.body,
  });

  res.status(201).send({ message: "User sucessfully added" });
};
