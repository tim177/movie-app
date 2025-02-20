import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  Group,
  Flex,
  ThemeIcon,
  Button,
  ActionIcon,
  Title,
  TextInput,
  useMantineTheme,
  useMantineColorScheme,
  Box,
} from "@mantine/core";
import {
  IconBrandAdobe,
  IconSun,
  IconMoonStars,
  IconSearch,
  IconLogout, // Added Logout Icon
} from "@tabler/icons-react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export default function Header({ opened, setOpened }: HeaderProps) {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MantineHeader height={{ base: 60, md: 70 }} p="md">
      <Flex justify="space-between" align="center" w="100%" px="xl">
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          <ThemeIcon color="red">
            <IconBrandAdobe />
          </ThemeIcon>

          {/* Hide MovieFlex title on small screens */}
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Title
              order={3}
              variant="gradient"
              gradient={{ from: "red", to: "orange", deg: 45 }}
            >
              MovieFlex
            </Title>
          </MediaQuery>
        </Group>

        {/* Center: Search Bar (Hidden on small screens) */}
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Box w="250px">
            <TextInput icon={<IconSearch />} placeholder="Search" />
          </Box>
        </MediaQuery>

        {/* Right side: Theme Toggle & Logout */}
        <Group spacing="sm">
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
          </ActionIcon>

          {/* Logout button on larger screens */}
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Button color="red" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </MediaQuery>

          {/* Logout icon on smaller screens */}
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <ActionIcon color="red" onClick={handleLogout} title="Logout">
              <IconLogout size="1.2rem" />
            </ActionIcon>
          </MediaQuery>
        </Group>
      </Flex>
    </MantineHeader>
  );
}
