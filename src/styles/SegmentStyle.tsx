import { createStyles, rem } from "@mantine/core";

export const useSegements = createStyles((theme) => ({
  root: {
    width: "200px",
    backgroundColor: "white",
    color: "#000",
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: "linear-gradient(to left top, #ff8243, #f94d00)",
  },

  control: {
    border: "0 !important",
  },

  label: {
    color: "#000",
    ":hover": {
      color: "#000",
    },
  },
}));
