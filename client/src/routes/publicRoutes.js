import { useRoutes } from "react-router";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const AppRoutes = () => {
  return useRoutes(publicRoutes);
};

export default AppRoutes;
