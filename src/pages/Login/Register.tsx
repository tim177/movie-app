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
} from "@mantine/core";
import { motion } from "framer-motion";
import RegisterLogo from "../../assets/register_logo.svg";

import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconMovie, IconX } from "@tabler/icons-react"; // Fixed IconCross to IconX
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "../../styles/RegisterStyle";

const Register = () => {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

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
      notifications.show({
        title: "Registration Failed",
        message: err.message || "Something went wrong 😕",
        color: "red",
        icon: <IconX size={18} />,
        autoClose: 5000,
      });

      setError(err.message);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Container
        size={isMobile ? "xs" : 900}
        px={isMobile ? "xs" : "xl"}
        pb={20}
        style={{
          display: "inline-block",
          margin: "auto",
        }}
      >
        <Paper className={classes.form} radius={0} p={isMobile ? "md" : 30}>
          <Image src={RegisterLogo} width={200} height={100} mx={"auto"} />

          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={20}
          >
            Join the MovieVerse!
          </Title>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleRegister}>
              <Stack>
                <TextInput
                  label="Name"
                  placeholder="Your full name"
                  size="md"
                  icon={<IconMovie size="1rem" />}
                  required
                />
                <TextInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email address"
                  placeholder="hello@movieverse.com"
                  size="md"
                  icon={<IconMovie size="1rem" />}
                  required
                />
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="Your strong password"
                  size="md"
                  icon={<IconMovie size="1rem" />}
                  required
                />
              </Stack>

              <Button
                fullWidth
                mt="xl"
                size="md"
                type="submit"
                loading={loading}
              >
                Create my account
              </Button>
            </form>
          </motion.div>

          <Text ta="center" mt="md">
            Already have an account?{" "}
            <Anchor<"a">
              href="/login"
              weight={700}
              // onClick={(event) => event.preventDefault()}
            >
              Login
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;
