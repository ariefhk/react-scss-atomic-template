export interface RouteInterface {
  name: string;
  path: string;
  component: React.FC;
}

export interface RouteRootInterface extends RouteInterface {
  routes?: RouteRootInterface[];
}

const routeModules = import.meta.glob("./**/*.route.ts", { eager: true });

const generatedRouteList = Object.values(routeModules).flatMap(
  (module) => (module as { default: RouteRootInterface }).default
);

const routes: RouteRootInterface[] = [...generatedRouteList];

export default routes;
