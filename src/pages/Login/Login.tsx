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
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { notifications, showNotification } from "@mantine/notifications";
import { useAuth } from "../../contexts/AuthContext";
import {
  IconBrandGoogle,
  IconBrandTwitter,
  IconCheck,
  IconCross,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      await login(email, password);

      showNotification({
        title: "Login Successful",
        message: "You are now logged in!",
        color: "green",
        icon: <IconCheck size={18} />,
      });

      navigate("/app"); // Redirect to /app after login
    } catch (err: any) {
      showNotification({
        title: "Login Failed",
        message: err.message || "Invalid credentials",
        color: "red",
        icon: <IconCross size={18} />,
      });

      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: theme.fn.linearGradient(
          45,
          theme.colors.cyan[6],
          theme.colors.indigo[9]
        ),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container size={isMobile ? "xs" : 900} px={isMobile ? "xs" : "xl"}>
        <Paper
          radius="lg"
          p={isMobile ? "md" : "xl"}
          withBorder
          sx={{
            overflow: "hidden",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                flex: "1 1 50%",
              }}
            >
              <Image
                src="https://wallpapercat.com/w/full/a/f/b/34537-1536x2732-iphone-hd-fight-club-background-photo.jpg"
                maw={360}
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
              padding: isMobile ? 0 : theme.spacing.xl,
              width: "100vw",
            }}
          >
            <Title order={2} ta="center" mt="md" mb={50}>
              Welcome back to MovieVerse!
            </Title>

            <form onSubmit={handleLogin}>
              <Stack>
                <TextInput
                  label="Email address"
                  placeholder="hello@example.com"
                  size="md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="Your password"
                  size="md"
                  required
                />
                <Checkbox label="Keep me logged in" />
              </Stack>

              <Group position="apart" mt="xl">
                <Anchor
                  component="button"
                  type="button"
                  color="dimmed"
                  size="xs"
                >
                  Forgot password?
                </Anchor>
              </Group>
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

            <Text color="dimmed" size="sm" ta="center" mt={5}>
              Don't have an account yet?{" "}
              <Anchor size="sm" component="button" type="button">
                <Link to="/register">Create account</Link>
              </Anchor>
            </Text>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
