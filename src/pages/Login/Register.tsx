import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import styles from "./Register.module.css";
import { IconCheck, IconX } from "@tabler/icons-react"; // Fixed IconCross to IconX
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    <div className={styles.registerContainer}>
      <h2>Sign Up</h2>
      <p>Create your account</p>
      <form onSubmit={handleRegister} className={styles.registerForm}>
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
        <button type="submit" className={styles.registerButton}>
          Sign Up
        </button>
      </form>
      <Link to="/login" className={styles.loginLink}>
        Already have an account? Log in
      </Link>
    </div>
  );
};

export default Register;
