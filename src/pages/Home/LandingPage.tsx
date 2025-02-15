import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_one}></div>
        <div className={styles.hero_two}></div>
        <h1 className={styles.header_title}>
          <span className={styles.header_primary}>Welcome to CineVerse</span>
          <span className={styles.header_sub}>
            Your gateway to unlimited movies & shows! 🍿🎥
          </span>
        </h1>
        <p className={styles.description}>
          Discover the best movies, create your watchlist, and dive into the
          world of cinema like never before!
        </p>
        <div className={styles.controls}>
          <button
            className={styles.button}
            onClick={() => navigate("/register")}
          >
            Sign Up 🎬
          </button>
          <button
            className={`${styles.button} ${styles.secondary}`}
            onClick={() => navigate("/login")}
          >
            Login 🍿
          </button>
        </div>
      </div>
    </>
  );
}
