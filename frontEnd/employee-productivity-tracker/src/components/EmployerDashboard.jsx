import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Leaderboard from "./Leaderboard";

const data = [
  { name: "BAU", value: 40 },
  { name: "Ad Hoc", value: 30 },
  { name: "Project-Based", value: 30 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const EmployerDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Employer Dashboard</h2>
      <PieChart width={400} height={400}>
        <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <Leaderboard />
    </div>
  );
};

const styles = {
  container: { padding: "1rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
  heading: { fontSize: "1.5rem", marginBottom: "1rem" },
};

export default EmployerDashboard;
