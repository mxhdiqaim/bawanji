import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

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
