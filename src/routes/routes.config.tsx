import LandingPage from "../pages/LandingPage/LandingPage";

type RouteType = {
  path: string;
  element: JSX.Element;
};

export enum PathsName {
  main = "main",
  user = "user",
  invite = "invite",
}

export const routesConfig: Record<PathsName, RouteType> = {
  main: {
    path: "/",
    element: <LandingPage />,
  },
  invite: {
    path: "/invite",
    element: <LandingPage />,
  },
  user: {
    path: "/user",
    element: <LandingPage />,
  },
};
