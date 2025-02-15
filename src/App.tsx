// src/App.tsx
import { Outlet } from "react-router-dom";
import { MantineProvider, Notification } from "@mantine/core";
import { theme } from "./theme";
import "./App.scss";

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Notification />
      <Outlet />
    </MantineProvider>
  );
}
