import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get("https://example.com/api/leaderboard"); // API endpoint
      setEmployees(response.data.employees);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leaderboard data", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading leaderboard...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Leaderboard</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Rank</th>
            <th style={styles.header}>Employee</th>
            <th style={styles.header}>Completed Tasks</th>
            <th style={styles.header}>Rewards</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
              <td style={styles.cell}>{index + 1}</td>
              <td style={styles.cell}>{employee.name}</td>
              <td style={styles.cell}>{employee.completedTasks}</td>
              <td style={styles.cell}>
                {employee.badges.map((badge, i) => (
                  <span key={i} style={styles.badge}>
                    {badge}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  header: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "0.8rem",
    textAlign: "left",
  },
  rowEven: {
    backgroundColor: "#f2f2f2",
  },
  rowOdd: {
    backgroundColor: "#fff",
  },
  cell: {
    padding: "0.8rem",
    border: "1px solid #ddd",
  },
  badge: {
    display: "inline-block",
    padding: "0.2rem 0.5rem",
    margin: "0 0.3rem",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "0.8rem",
  },
};

export default Leaderboard;
