import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loader, Text } from "@mantine/core";
import { motion } from "framer-motion";

import AppLayout from "./components/layout/AppLayout";
import HeroImageBackground from "./pages/Home/LandingPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Explore from "./pages/Explore/Explore";
import Detail from "./pages/details/Detail";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Favourites from "./pages/Favourite";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AuthProvider } from "./contexts/AuthContext";
import Register from "./pages/Login/Register";

const LoaderFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="loader-container"
  >
    <Loader size="lg" />
    <Text>Loading...</Text>
  </motion.div>
);

const routes = [
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

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 1000 * 60 * 15,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  </AuthProvider>
);
