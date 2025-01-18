import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("URL", formData);
      if (response.data.success) {
        setMessage("Sign up successful! Please sign in.");
      } else {
        setMessage("Sign up failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error during sign up. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button style={styles.button} onClick={handleSignUp}>Sign Up</button>
        {message && <p style={styles.message}>{message}</p>}
        <div style={styles.footer}>
          <p style={styles.footerText}>Already have an account? <a href="/signin" style={styles.link}>Sign In</a></p>
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
    padding:"20px",
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
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  buttonHover: {
    backgroundColor: "#218838",
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

export default SignUp;
