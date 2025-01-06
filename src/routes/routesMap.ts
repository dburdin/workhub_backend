import { RouteMap } from "../types";

export const routesMap: RouteMap[] = [
  {
    url: "/users",
    method: "GET",
    controller: (req, res) => 1 + 1,
  },
];
