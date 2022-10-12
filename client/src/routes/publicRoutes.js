import { useRoutes } from "react-router";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import SettingsPage from "../pages/SettingsPage";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
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
