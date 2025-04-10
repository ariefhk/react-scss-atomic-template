import HomePage from "../../views/pages/home-page";
import { RouteRootInterface } from "../routes.utils";

const homeRoutes: RouteRootInterface[] = [
  {
    name: "home-route",
    path: "/",
    component: HomePage,
  },
];

export default homeRoutes;
