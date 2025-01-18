import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post("URL", credentials);
      if (response.data.success) {
        setMessage("Sign in successful!");
      } else {
        setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setMessage("Error during sign in. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign In</h2>
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <button style={styles.button} onClick={handleSignIn}>Sign In</button>
        {message && <p style={styles.message}>{message}</p>}
        <div style={styles.footer}>
          <p style={styles.footerText}>Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f7fc",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  message: {
    marginTop: "1rem",
    color: "#d9534f",
    fontSize: "1rem",
  },
  footer: {
    marginTop: "1rem",
  },
  footerText: {
    fontSize: "0.9rem",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default SignIn;
