import { React } from "react";
import { OverviewTask } from "../../modules";

export const OverviewTasksPage = ({ tasks }) => {
  return (
    <div>
      <h1>Tasks</h1>
      <OverviewTask tasks={tasks} showAllTasks={true} />
    </div>
  );
};
