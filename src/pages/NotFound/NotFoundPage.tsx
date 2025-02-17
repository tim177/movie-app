import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import classes from "./NotFoundImage.module.css";

export function NotFoundPage() {
  return (
    <Container className={classes.root}>
      <SimpleGrid
        cols={1}
        spacing={40}
        breakpoints={[{ maxWidth: "sm", cols: 2, spacing: 80 }]}
      >
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            The page you are trying to open does not exist. You may have
            mistyped the address, or the page has been moved to another URL. If
            you think this is an error, contact support.
          </Text>
          <Link to="/app/explore">
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Link>
        </div>
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
}
