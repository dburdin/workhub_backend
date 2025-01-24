import { RouteMap } from "../types";
import { add, get } from "../controllers";

export const routesMap: RouteMap[] = [
  {
    path: "/users",
    method: "GET",
    controller: get,
  },
  {
    path: "/users",
    method: "POST",
    controller: add,
  },
];
