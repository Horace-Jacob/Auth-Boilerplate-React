import type { RouteObject } from "react-router-dom";
import LoginPage from "../pages/login.pages";
import ProfilePage from "../pages/profile.pages";

const normalRoutes: RouteObject = {
  path: "*",
  element: "",
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
