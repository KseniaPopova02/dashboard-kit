import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  fetchTasks,
  deleteTask,
  deleteAllTasks,
  updateTaskCheckbox,
  addNewTask,
} from "../../pages/View/redux";
import { OverviewTaskRepresentation } from "./OverviewTaskRepresentation";

export const OverviewTask = ({ showAllTasks = false, tasks }) => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values) => {
      const newTask = {
        id: nanoid(),
        taskName: values.taskName,
        flags: values.flags,
        isChecked: false,
      };
      dispatch(addNewTask(newTask));
    },
    [dispatch]
  );

  const handleShowAllTasks = useCallback(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDeleteAllTasks = () => {
    dispatch(deleteAllTasks());
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
      tasks={tasks}
      showAllTasks={showAllTasks}
      onSubmit={onSubmit}
      handleShowAllTasks={handleShowAllTasks}
      handleDeleteAllTasks={handleDeleteAllTasks}
      handleDeleteTask={handleDeleteTask}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};
