import { useRoutes } from "react-router";
import HomePage from "../components/pages/HomePage";
import PageNotFound from "../components/pages/PageNotFound";

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
