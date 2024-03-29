import { About, Home, NotFound } from "../pages";

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  {
    to: "/",
    element: Home,
  },
  {
    to: "/about",
    element: About,
  },
  {
    to: "*",
    element: NotFound,
  },
];
