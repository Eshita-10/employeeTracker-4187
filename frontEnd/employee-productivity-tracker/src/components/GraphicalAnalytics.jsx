import React from "react";

const GraphicalAnalytics = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Graphical Analytics</h2>
      <p>Graphical representation of productivity trends will go here.</p>
    </div>
  );
};

const styles = {
  container: { padding: "1rem", backgroundColor: "#f0f0f0", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
  heading: { fontSize: "1.5rem", marginBottom: "1rem" },
};

export default GraphicalAnalytics;
