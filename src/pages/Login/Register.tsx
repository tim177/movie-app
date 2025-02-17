"use client";

import type React from "react";

import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  Stack,
  Text,
  Anchor,
  useMantineTheme,
  Image,
  createStyles,
  Box,
  Center,
} from "@mantine/core";
import { motion } from "framer-motion";
import RegisterLogo from "../../assets/register_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import {
  IconCheck,
  IconMovie,
  IconX,
  IconMail,
  IconLock,
} from "@tabler/icons-react";
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "../../styles/RegisterStyle";

const Register = () => {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null); // State for error message
  const navigate = useNavigate();

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before trying to register

    try {
      await register(email, password);
      notifications.show({
        title: "Registration Successful",
        message: "Your account has been created! 🎉",
        color: "green",
        icon: <IconCheck size={18} />,
        autoClose: 3000,
      });
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Something went wrong 😕"); // Set error message
      notifications.show({
        title: "Registration Failed",
        message: err.message || "Something went wrong 😕",
        color: "red",
        icon: <IconX size={18} />,
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={classes.wrapper}>
      <Container size={420} my={20}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper className={classes.form} radius="lg" withBorder>
            <Center mb="md">
              <Image
                src={RegisterLogo || "/placeholder.svg"}
                className={classes.logo}
                alt="MovieVerse Logo"
              />
            </Center>

            <Title
              order={2}
              className={classes.title}
              ta="center"
              mt="md"
              mb={40}
            >
              Join the MovieVerse! 😎
            </Title>

            <form onSubmit={handleRegister}>
              <Stack>
                <TextInput
                  label="Name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="md"
                  icon={<IconMovie size="1rem" />}
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                  required
                />
                <TextInput
                  label="Email address"
                  placeholder="hello@movieverse.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md"
                  icon={<IconMail size="1rem" />}
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                  required
                />
                <PasswordInput
                  label="Password"
                  placeholder="Your strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="md"
                  icon={<IconLock size="1rem" />}
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                  required
                />
              </Stack>

              {/* Display error message above the button */}
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
                className={classes.control}
              >
                Create my account
              </Button>
            </form>

            <Text ta="center" mt="md">
              Already have an account?{" "}
              <Anchor component={Link} to="/login" weight={700}>
                Login
              </Anchor>
            </Text>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Register;
