import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  setTasksToShow,
  addTask,
  deleteTask,
  updateTaskCheckbox,
  deleteAllTasks,
} from "../../store";
import { Api, TASKS } from "../../API";
import { OverviewTaskRepresentation } from "./OverviewTaskRepresentation";

export const OverviewTask = ({ showAllTasks = false, tasksToShow }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasksToShow);

  const onSubmit = useCallback(
    (values) => {
      const newTask = {
        id: nanoid(),
        taskName: values.taskName,
        flags: values.flags,
        isChecked: false,
      };
      Api.post(TASKS, newTask).then(() => {
        dispatch(addTask(newTask));
      });
    },
    [dispatch]
  );

  const handleShowAllTasks = useCallback(() => {
    dispatch(setTasksToShow(tasks));
  }, [dispatch, tasks]);

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
