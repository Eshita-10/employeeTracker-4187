import React from "react";
import TaskLogger from "../components/TaskLogger";
import NotificationSystem from "../components/NotificationSystem";

const EmployeePage = () => {
  return (
    <div>
      <TaskLogger />
      <NotificationSystem />
    </div>
  );
};

export default EmployeePage;
