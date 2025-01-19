## Employee Productivity Tracker (Frontend)
A web-based productivity management tool designed to help employees log and track their daily tasks while providing employers with insights into team performance. The app fosters transparency, fairness, and enhanced productivity by offering notifications, analytics, and leaderboards for better task management and motivation.

## Features
- Employee
Task Logging:
Log tasks with title, description, time spent, priority, and task type (BAU, Ad Hoc, Project-Based).
Attach files, references, or links to tasks.

Notifications:
Receive productivity alerts for low performance or overdue tasks.
Get deadline reminders and recognition badges for high performance.

Personal Timeline:
View a timeline of all logged tasks with detailed information for easy tracking.

Analytics:
Visualize task distribution and performance trends using charts.

Employer
Dashboard Overview:
Monitor team productivity through visual graphs and detailed task tables.
Filter tasks by category, priority, or assignee.

Leaderboard:
Highlight top-performing employees and assign badges for milestones.

Reports:
Generate weekly or monthly productivity reports for teams.

Common Features
Role-Based Access:
Employers and employees have distinct views and functionality based on their roles.

Authentication:
Secure sign-in and sign-up with data fetched from the backend for verification.

## Technologies Used
React: Frontend library for building the user interface.
Vite: Fast build tool and development server.
Axios: For making HTTP requests to the backend.
React Router DOM: For routing between pages.
CSS-in-JS and Basic CSS: For styling components.
Chart.js or similar library: For data visualization.

## Setup Instructions
- Clone the repository:

git clone https://github.com/your-username/employee-productivity-tracker-frontend.git
cd employee-productivity-tracker-frontend
Install dependencies:

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