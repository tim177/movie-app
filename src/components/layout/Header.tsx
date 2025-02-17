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
} from "@mantine/core";
import {
  IconBrandAdobe,
  IconSun,
  IconMoonStars,
  IconSearch,
} from "@tabler/icons-react";

interface HeaderProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export default function Header({ opened, setOpened }: HeaderProps) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md">
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
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
          </ActionIcon>
          <Button color="red">Logout</Button>
        </Group>
      </Flex>
    </MantineHeader>
  );
}
