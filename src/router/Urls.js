import { lazy } from "react";

// Pages import
const Home = lazy(() => import("../pages/home/Home"));
const Feedback = lazy(() => import("../pages/feedback"));
const Reports = lazy(() => import("../pages/reports"));

const routes = {
  FEEDBACK: {
    path: "/feedback",
    Component: Feedback
  },
  REPORTS: {
    path: "/reports",
    Component: Reports
  },
  HOME: {
    path: "/",
    Component: Home
  }
};

export default routes;
