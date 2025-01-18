# employeeTracker-4187

Employee and Task Management API
A Node.js and Express-based API for managing employees and tasks. The system includes JWT-based authentication and password hashing with Argon2. The project is structured for scalability, modularity, and best practices.

Features
Authentication: User login and signup with JWT authentication.
Employee Management: Add, view, update, and delete employees.
Task Management: Create, assign, update, and delete tasks.
Database: MongoDB integration for data storage.
Security: Secure password storage with Argon2 hashing.
Folder Structure
bash
Copy
Edit
/employeeTracker-4187/backend 
├── /controllers          # Handles application logic  
├── /middleware           # Authentication and validation middleware  
├── /models               # Mongoose schemas for employees and tasks  
├── /routes               # API endpoints for authentication, employees, and tasks  
├── /utils                # Utility functions for password hashing and JWT  
├── app.js                # Main application entry point  
├── package.json          # Project dependencies and scripts  
└── .env                  # Environment variables 
 
Prerequisites
Node.js
MongoDB

Setup
Clone the repository.
Install dependencies using npm install.
Create a .env file with your MongoDB connection string and server port.
Start the server using node app.js.


API Overview
Authentication: Endpoints for user registration and login.
Employee Management: CRUD operations for employee data.
Task Management: CRUD operations for tasks, including task assignment.

Technologies
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication: JWT with Argon2 for secure password storage

Future Enhancements
Role-based access control (RBAC).
Advanced filtering and search capabilities.
Unit and integration testing.

Contact
GitHub: naseer-bhat
Email: studymail2k18@gmail.com