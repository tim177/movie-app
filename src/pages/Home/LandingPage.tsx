import { useEffect, useState } from "react";
import {
  Title,
  Text,
  Container,
  Button,
  Group,
  rem,
  TextInput,
  Overlay,
  Center,
  Box,
  Blockquote,
} from "@mantine/core";

import { Link } from "react-router-dom";

export default function MovieLanding() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box bg="dark.9">
      {/* Header */}
      <Box
        py="md"
        sx={(theme) => ({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor: scrolled
            ? theme.fn.rgba(theme.colors.dark[9], 0.9)
            : "transparent",
          transition: "all 0.3s",
        })}
      >
        <Container
          size="lg"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          <Group position="apart">
            <Title order={2} color="white">
              MovieVerse
            </Title>
            <Group>
              <Button variant="subtle" color="gray">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: "pink", to: "violet" }}
              >
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Start Exploring
                </Link>
              </Button>
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, .9) 70%)"
          opacity={1}
          zIndex={0}
        />
        <Container
          size="lg"
          sx={{ height: "100%", position: "relative", zIndex: 1 }}
        >
          <Center sx={{ height: "100%" }}>
            <Box ta="center" mt={-120}>
              <Title
                sx={(theme) => ({
                  fontSize: rem(60),
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: theme.white,
                  [theme.fn.smallerThan("sm")]: {
                    fontSize: rem(40),
                  },
                })}
              >
                🍿🍾🎉
              </Title>
              <Text
                size="xl"
                color="gray.4"
                mt="xl"
                mb={30}
                sx={{ maxWidth: 600 }}
                mx="auto"
              ></Text>
              Please login/signup to continue
              <Group position="center">
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "pink", to: "violet" }}
                >
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Start Exploring
                  </Link>
                </Button>
              </Group>
            </Box>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
