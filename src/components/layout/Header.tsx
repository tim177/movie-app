import { Burger, Container, Group } from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import { IconBrandAdobe } from "@tabler/icons-react";

export function HeaderSimple() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <IconBrandAdobe />
      </Container>
    </header>
  );
}
