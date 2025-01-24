import { Request, Response } from "express";

export interface RouteMap {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  controller: (req: Request, res: Response) => void;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  role: "Lawyer" | "Content manager" | "Security" | "Designer";
  img: string | File;
}
