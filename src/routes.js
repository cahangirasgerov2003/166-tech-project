import { lazy } from "react";

const Home = lazy(() => import("./pages/home/index"));
const Company = lazy(() => import("./pages/company/index"));

const Team = lazy(() => import("./pages/team/index"));
const Services = lazy(() => import("./pages/services/index"));

const WeInTheMedia = lazy(() => import("./pages/we-in-the-media/index"));

const NotFound = lazy(() => import("./pages/404"));

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/company", component: <Company /> },
  { path: "/team", component: <Team /> },
  { path: "/services", component: <Services /> },
  { path: "/we-in-the-media", component: <WeInTheMedia /> },
  { path: "*", component: <NotFound /> },
];
