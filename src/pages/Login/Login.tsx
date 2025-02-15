import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import styles from "./Login.module.css"; // Import CSS module
import { useAuth } from "../../contexts/AuthContext";
import { IconCheck, IconCross } from "@tabler/icons-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    <div className={styles.loginContainer}>
      <h2>Sign In</h2>
      <p>Use your account to log in</p>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.inputField}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>
          Sign In
        </button>
      </form>
      <Link to="/register" className={styles.registerLink}>
        Don't have an account? Sign up
      </Link>
    </div>
  );
};

export default Login;
