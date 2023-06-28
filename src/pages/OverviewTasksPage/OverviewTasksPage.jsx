import React, { useEffect } from "react";
import { OverviewTask } from "../../modules";
import { fetchTasks } from "../../store";
import { useDispatch, useSelector } from "react-redux";

export const OverviewTasksPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.overviewPage.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Tasks</h1>
      <OverviewTask tasks={tasks} showAllTasks />
    </div>
  );
};
