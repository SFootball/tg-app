import {
  LazyRouteFunction,
  NonIndexRouteObject,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Component as LandingPage } from "../pages/LandingPage/LandingPage";
import { Layout } from "./Layout";

export type RouteType = {
  path: PathsName;
  element?: JSX.Element;
  lazy?: LazyRouteFunction<NonIndexRouteObject>;
};

export enum PathsName {
  main = "/",
  invite = "/invite",
  user = "/user",
}

export const routesConfig: RouteType[] = [
  {
    path: PathsName.main,
    element: <LandingPage />,
    // lazy: () => import("../pages/LandingPage/LandingPage"),
  },
  {
    path: PathsName.invite,
    lazy: () => import("src/pages/Invite/Invite"),
  },
  {
    path: PathsName.user,
    lazy: () => import("src/pages/User/User"),
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    // <Routes>
    <Route path="/" element={<Layout />}>
      {routesConfig.map(({ path, element, lazy }) => (
        <Route key={path} path={path} lazy={lazy} element={element} />
      ))}
    </Route>
    // </Routes>
  )
);
