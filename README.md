# employeeTracker-4187

## Employee Productivity Tracker (Frontend)
A web-based productivity management tool designed to help employees log and track their daily tasks while providing employers with insights into team performance. The app fosters transparency, fairness, and enhanced productivity by offering notifications, analytics, and leaderboards for better task management and motivation.

Features
Employee Task Logging: Log tasks with title, description, time spent, priority, and task type (BAU, Ad Hoc, Project-Based). Attach files, references, or links to tasks.
Notifications: Receive productivity alerts for low performance or overdue tasks. Get deadline reminders and recognition badges for high performance.

Personal Timeline: View a timeline of all logged tasks with detailed information for easy tracking.

Analytics: Visualize task distribution and performance trends using charts.

Employer Dashboard Overview: Monitor team productivity through visual graphs and detailed task tables. Filter tasks by category, priority, or assignee.

Leaderboard: Highlight top-performing employees and assign badges for milestones.

Reports: Generate weekly or monthly productivity reports for teams.

Common Features Role-Based Access: Employers and employees have distinct views and functionality based on their roles.

Authentication: Secure sign-in and sign-up with data fetched from the backend for verification.

Technologies Used
React: Frontend library for building the user interface. Vite: Fast build tool and development server. Axios: For making HTTP requests to the backend. React Router DOM: For routing between pages. CSS-in-JS and Basic CSS: For styling components. Chart.js or similar library: For data visualization.

Setup Instructions
Clone the repository:
git clone https://github.com/Eshita-10/employeeTracker-4187/tree/main/frontEnd/employee-productivity-tracker cd employee-productivity-tracker-frontend Install dependencies:

npm install

Run the development server:

npm run dev

Open the application in your browser:

Go to http://localhost:5173/ (default port for Vite).

src/
├── components/
│   ├── TaskLogger.jsx
│   ├── NotificationSystem.jsx
│   ├── EmployerDashboard.jsx
│   ├── GraphicalAnalytics.jsx
│   ├── Leaderboard.jsx
├── pages/
│   ├── EmployeePage.jsx
│   ├── EmployerPage.jsx
│   ├── HomePage.jsx
│   ├── SignInPage.jsx
│   ├── SignUpPage.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx


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

/employeeTracker-4187
/backend 
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

video presentation :https://drive.google.com/file/d/1lLOFVvAtxPF6I-7PVKbW7U_5HFjIAKYc/view?usp=sharing

Contact
GitHub: https://github.com/naseer-bhat
Email: studymail2k18@gmail.com
