import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Flex,
  ThemeIcon,
  Button,
} from "@mantine/core";
import Sidebar from "./Sidebar";
import { IconBrandAdobe } from "@tabler/icons-react";

export default function AppLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: { background: "black" },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Sidebar opened={opened} />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Flex
              justify="space-between"
              w={"100vw"}
              px={"xl"}
              sx={{
                borderRadius: "8px",
                padding: "12px",
              }}
            >
              <ThemeIcon color="red">
                <IconBrandAdobe />
              </ThemeIcon>
              <Group>
                <Button color="red">Logout</Button>
              </Group>
            </Flex>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
