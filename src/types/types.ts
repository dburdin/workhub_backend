export interface RouteMap {
  url: string;
  method: string;
  controller: (req: Request, res: Response) => void;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  role: "Lawyer" | "Content manager" | "Security" | "Designer";
  img: string;
}
