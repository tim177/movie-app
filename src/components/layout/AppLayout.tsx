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
  ActionIcon,
  Title,
  TextInput,
} from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import {
  IconBrandAdobe,
  IconSun,
  IconMoon,
  IconMoonStars,
  IconSearch,
} from "@tabler/icons-react";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
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
              align="center"
              w={"100vw"}
              px={"xl"}
              sx={{
                borderRadius: "8px",
                padding: "12px",
              }}
            >
              <Group>
                <ThemeIcon color="red">
                  <IconBrandAdobe />
                </ThemeIcon>
                <Title
                  order={3}
                  variant="gradient"
                  gradient={{ from: "red", to: "orange", deg: 45 }}
                >
                  MovieFlex
                </Title>
              </Group>
              <Group>
                <TextInput icon={<IconSearch />} placeholder="Search" />
                <ActionIcon
                  variant="outline"
                  color={dark ? "yellow" : "blue"}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? (
                    <IconSun size="1.1rem" />
                  ) : (
                    <IconMoonStars size="1.1rem" />
                  )}
                </ActionIcon>
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
