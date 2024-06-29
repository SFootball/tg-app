import {
  LazyRouteFunction,
  NonIndexRouteObject,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PathsName } from "src/entities/navigation/navigation";

export type RouteType = {
  path: PathsName;
  element?: JSX.Element;
  lazy?: LazyRouteFunction<NonIndexRouteObject>;
};

export const routesConfig: RouteType[] = [
  {
    path: PathsName.main,
    lazy: () => import("src/pages/MainGame/MainGame"),
  },
  {
    path: PathsName.home,
    lazy: () => import("src/pages/HomePage/HomePage"),
  },
  {
    path: PathsName.tasks,
    lazy: () => import("src/pages/Tasks/Tasks"),
  },
  {
    path: PathsName.invite,
    lazy: () => import("src/pages/Invite/Invite"),
  },
  {
    path: PathsName.user,
    lazy: () => import("src/pages/User/User"),
  },
  {
    path: PathsName.game,
    lazy: () => import("src/pages/game/GamePage"),
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routesConfig.map(({ path, element, lazy }) => (
        <Route key={path} path={path} lazy={lazy} element={element} />
      ))}
    </>
  )
);
