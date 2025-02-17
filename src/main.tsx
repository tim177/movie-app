import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { queryClient } from "./api/queryClient";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);

function Root() {
  return (
    <AuthProvider>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </StrictMode>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
