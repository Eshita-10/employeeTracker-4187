import React, { useState } from "react";

const TaskLogger = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", priority: "", type: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", description: "", priority: "", type: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Log Task</h2>
      <input
        style={styles.input}
        type="text"
        name="title"
        placeholder="Task Title"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <textarea
        style={styles.textarea}
        name="description"
        placeholder="Task Description"
        value={newTask.description}
        onChange={handleInputChange}
      ></textarea>
      <select style={styles.select} name="priority" value={newTask.priority} onChange={handleInputChange}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select style={styles.select} name="type" value={newTask.type} onChange={handleInputChange}>
        <option value="">Select Task Type</option>
        <option value="BAU">BAU</option>
        <option value="Ad Hoc">Ad Hoc</option>
        <option value="Project-Based">Project-Based</option>
      </select>
      <button style={styles.button} onClick={addTask}>Add Task</button>
      <h3 style={styles.timelineHeading}>Task Timeline</h3>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <strong>{task.title}</strong>  
            <p style={styles.taskDetails}>{task.description}</p>
            <span style={styles.meta}>[{task.priority}, {task.type}]</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "2rem auto",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  select: {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  timelineHeading: {
    fontSize: "1.8rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    color: "#555",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    padding: "1rem",
    borderBottom: "1px solid #ddd",
    marginBottom: "0.5rem",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  taskDetails: {
    fontSize: "0.9rem",
    color: "#666",
  },
  meta: {
    fontSize: "0.8rem",
    color: "#888",
  },
};

export default TaskLogger;
