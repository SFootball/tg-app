import {
  LazyRouteFunction,
  NonIndexRouteObject,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Component as MainPage } from "../pages/MainPage/MainPage";
import { Layout } from "./Layout";
import { PathsName } from "src/entities/navigation/navigation";

export type RouteType = {
  path: PathsName;
  element?: JSX.Element;
  lazy?: LazyRouteFunction<NonIndexRouteObject>;
};

export const routesConfig: RouteType[] = [
  {
    path: PathsName.main,
    element: <MainPage />,
    // lazy: () => import("src/pages/MainPage/MainPage"),
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
    lazy: () => import("src/pages/game/Game"),
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {routesConfig.map(({ path, element, lazy }) => (
        <Route key={path} path={path} lazy={lazy} element={element} />
      ))}
    </Route>
  )
);
