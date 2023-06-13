import React, { useEffect } from "react";
import { OverviewTask } from "../../modules";
import { setTasksToShow } from "../../store";
import { useDispatch, useSelector } from "react-redux";

export const OverviewTasksPage = () => {
  const dispatch = useDispatch();
  const tasksToShow = useSelector((state) => state.tasks.tasksToShow);

  useEffect(() => {
    dispatch(setTasksToShow());
  }, [dispatch]);

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
