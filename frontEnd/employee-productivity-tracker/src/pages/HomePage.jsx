import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus, faUser, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Employee Productivity Tracker</h1>
      <div style={styles.cardContainer}>
        <Link to="/signin" style={styles.card}>
          <div style={styles.cardContent}>
            <FontAwesomeIcon icon={faSignInAlt} size="3x" style={styles.icon} />
            <h2 style={styles.cardTitle}>Sign In</h2>
            <p>Access your account to track productivity.</p>
          </div>
        </Link>
        <Link to="/signup" style={styles.card}>
          <div style={styles.cardContent}>
            <FontAwesomeIcon icon={faUserPlus} size="3x" style={styles.icon} />
            <h2 style={styles.cardTitle}>Sign Up</h2>
            <p>Create a new account to get started.</p>
          </div>
        </Link>
        <Link to="/employee" style={styles.card}>
          <div style={styles.cardContent}>
            <FontAwesomeIcon icon={faUser} size="3x" style={styles.icon} />
            <h2 style={styles.cardTitle}>Employee Portal</h2>
            <p>Manage your daily tasks and performance.</p>
          </div>
        </Link>
        <Link to="/employer" style={styles.card}>
          <div style={styles.cardContent}>
            <FontAwesomeIcon icon={faTachometerAlt} size="3x" style={styles.icon} />
            <h2 style={styles.cardTitle}>Employer Dashboard</h2>
            <p>View insights and productivity reports.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#2c3e50",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "600",
  },
  cardContainer: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    padding: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    textDecoration: "none",
    color: "#333",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transform: "scale(1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    margin: "0",
  },
  icon: {
    color: "#007BFF",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "0.5rem",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
  },
};

export default HomePage;
