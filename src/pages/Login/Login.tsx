import type React from "react";

import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Stack,
  Box,
  useMantineTheme,
  Image,
  Center,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { useAuth } from "../../contexts/AuthContext";
import {
  IconBrandGoogle,
  IconBrandTwitter,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // New state for error
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const { login } = useAuth();

  // Helper function to validate the email format
  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset the error state

    // Validate email and password before making the API request
    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      notifications.show({
        title: "Login Successful",
        message: "You are now logged in!",
        color: "green",
        icon: <IconCheck size={18} />,
      });
      navigate("/app");
    } catch (err: any) {
      // Handle the specific API error
      let errorMessage = err.message || "Login failed. Please try again.";

      // Check if the error message is related to the email being already in use
      if (err.code === "EMAIL_ALREADY_IN_USE") {
        errorMessage =
          "This email is already in use. Please use a different email.";
      }

      // Handle invalid credentials
      if (err.code === "INVALID_CREDENTIALS") {
        errorMessage = "Invalid email or password. Please try again.";
      }

      // Set the error state for general API issues
      setError(errorMessage);

      notifications.show({
        title: "Login Failed",
        message: errorMessage,
        color: "red",
        icon: <IconX size={18} />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: theme.fn.linearGradient(
          45,
          theme.colors.cyan[6],
          theme.colors.indigo[9]
        ),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing.md,
      }}
    >
      <Container size={isTablet ? "xs" : 900} px="xs">
        <Paper
          radius="lg"
          p={isMobile ? "md" : "xl"}
          withBorder
          sx={{
            overflow: "hidden",
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
          }}
        >
          {!isTablet && (
            <Box
              sx={{
                flex: "1 1 50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="https://wallpapercat.com/w/full/a/f/b/34537-1536x2732-iphone-hd-fight-club-background-photo.jpg"
                alt="Login visual"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: theme.radius.md,
                }}
              />
            </Box>
          )}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              flex: "1 1 50%",
              padding: isMobile ? theme.spacing.sm : theme.spacing.xl,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Title order={2} ta="center" mt="md" mb={50}>
              Welcome back to MovieVerse!
            </Title>

            <form onSubmit={handleLogin}>
              <Stack spacing="md">
                <TextInput
                  label="Email address"
                  placeholder="hello@example.com"
                  size="md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  error={error && error.includes("email")} // Display error message for email
                />
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="Your password"
                  size="md"
                  required
                  error={error && error.includes("password")} // Display error message for password
                />
                <Group position="apart" mt="sm">
                  <Checkbox label="Keep me logged in" />
                  <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    size="sm"
                  >
                    Forgot password?
                  </Anchor>
                </Group>
              </Stack>

              {/* Error message display above the submit button */}
              {error && (
                <Text color="red" size="sm" align="center" mt="sm">
                  {error}
                </Text>
              )}

              <Button
                fullWidth
                mt="xl"
                size="md"
                type="submit"
                loading={loading}
              >
                Sign in
              </Button>
            </form>

            <Divider label="Or continue with" labelPosition="center" my="lg" />

            <Group grow mb="md" mt="md">
              <Button
                leftIcon={<IconBrandGoogle />}
                variant="default"
                color="gray"
              >
                Google
              </Button>
              <Button
                leftIcon={<IconBrandTwitter />}
                variant="default"
                color="gray"
              >
                Twitter
              </Button>
            </Group>

            <Center mt="md">
              <Text color="dimmed" size="sm" inline>
                Don't have an account yet?{" "}
                <Anchor component={Link} to="/register" size="sm" weight={700}>
                  Create account
                </Anchor>
              </Text>
            </Center>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
