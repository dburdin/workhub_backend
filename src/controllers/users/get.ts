import { Request, Response } from "express";

import { db } from "../../firestore";

export const get = async (req: Request, res: Response) => {
  const snapshot = await db.collection("users").get();

  if (snapshot.empty) {
    return res.status(200).send([]);
  }

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return res.status(200).send(users);
};
