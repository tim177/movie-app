import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "auto",
    maxWidth: 450,
    width: "100%",
    padding: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 26,
    fontWeight: 900,
    lineHeight: 1.2,
  },
  logo: {
    maxWidth: 150,
    width: "100%",
    height: "auto",
  },
  input: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[3],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    "&::placeholder": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[5],
    },
  },
  inputLabel: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));
