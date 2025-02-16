import { Outlet } from "react-router-dom";
import { Notification } from "@mantine/core";
import "./App.scss";

export default function App() {
  return (
    <>
      <Notification />
      <Outlet />
    </>
  );
}
