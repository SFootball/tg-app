import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./routes.config";
import { Layout } from "./Layout";

type RouteType = {
  path: string;
  element: JSX.Element;
};

const AllRoutes = () => {
  const routes: RouteType[] = Object.values(routesConfig);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
