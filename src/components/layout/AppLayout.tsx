import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, useMantineTheme } from "@mantine/core";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Sidebar opened={opened} setOpened={setOpened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      <Outlet />
    </AppShell>
  );
}
