import React, { useState, useEffect } from "react";
import { OverviewTask } from "../../modules";

export const OverviewTasksPage = () => {
  const [tasksToShow, setTasksToShow] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksToShow));
  }, [tasksToShow]);

  return (
    <div>
      <h1>Tasks</h1>
      <OverviewTask
        tasksToShow={tasksToShow}
        setTasksToShow={setTasksToShow}
        showAllTasks
      />
    </div>
  );
};
