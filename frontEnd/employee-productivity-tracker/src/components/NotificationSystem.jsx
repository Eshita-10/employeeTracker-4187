import React from "react";

const NotificationSystem = () => {
  const notifications = [
    { id: 1, type: "Deadline Reminder", message: "Task 'Design Report' is overdue." },
    { id: 2, type: "High Performance", message: "Great job on completing all tasks on time!" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Notifications</h2>
      <ul style={styles.list}>
        {notifications.map((note) => (
          <li key={note.id} style={styles.listItem}>
            <strong>{note.type}:</strong> {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: "1rem", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
  heading: { fontSize: "1.5rem", marginBottom: "1rem" },
  list: { listStyleType: "none", padding: "0" },
  listItem: { padding: "0.5rem", borderBottom: "1px solid #ddd" },
};

export default NotificationSystem;
