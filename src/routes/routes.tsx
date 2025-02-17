import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import AppLayout from "../components/layout/AppLayout";
import LoaderFallback from "../components/ui/LoaderFallback";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";

const HeroImageBackground = lazy(() => import("../pages/Home/LandingPage"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Login/Register"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Explore = lazy(() => import("../pages/Explore/Explore"));
const Detail = lazy(() => import("../pages/details/Detail"));
const Favourites = lazy(() => import("../pages/Favourite"));

export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoaderFallback />}>
        <HeroImageBackground />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoaderFallback />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoaderFallback />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="explore" replace /> },
      {
        path: "explore",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: ":name",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Explore />
          </Suspense>
        ),
      },
      {
        path: ":name/:id",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: "favourite",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Favourites />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoaderFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
];
