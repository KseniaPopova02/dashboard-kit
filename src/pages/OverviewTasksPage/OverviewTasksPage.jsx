import { React } from "react";
import { OverviewTask } from "../../modules";

export const OverviewTasksPage = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <OverviewTask showAllTasks />
    </div>
  );
};
