import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  setTasksToShow,
  addTask,
  deleteTask,
  updateTaskCheckbox,
  deleteAllTasks,
} from "../../store";

import { OverviewTaskRepresentation } from "./OverviewTaskRepresentation";

export const OverviewTask = ({ showAllTasks = false }) => {
  const dispatch = useDispatch();
  const tasksToShow = useSelector((state) => state.tasks.tasksToShow);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      dispatch(setTasksToShow(storedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksToShow));
  }, [tasksToShow]);

  const onSubmit = useCallback(
    (values) => {
      const newTask = {
        id: nanoid(),
        taskName: values.taskName,
        flags: values.flags,
        isChecked: false,
      };

      dispatch(addTask(newTask));
    },
    [dispatch]
  );

  const handleShowAllTasks = useCallback(() => {
    dispatch(setTasksToShow(tasksToShow));
  }, [dispatch, tasksToShow]);

  const handleDeleteAllTasks = () => {
    dispatch(deleteAllTasks());
    localStorage.removeItem("tasks");
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleCheckboxChange = useCallback(
    (taskId) => {
      dispatch(updateTaskCheckbox(taskId));
    },
    [dispatch]
  );

  return (
    <OverviewTaskRepresentation
      tasks={tasksToShow}
      showAllTasks={showAllTasks}
      onSubmit={onSubmit}
      handleShowAllTasks={handleShowAllTasks}
      handleDeleteAllTasks={handleDeleteAllTasks}
      handleDeleteTask={handleDeleteTask}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};
