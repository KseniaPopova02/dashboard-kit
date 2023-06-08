import { useEffect, useCallback } from "react";
import { OverviewTaskRepresentation } from "./OverviewTaskRepresentation";
import { nanoid } from "nanoid";

export const OverviewTask = ({
  tasksToShow,
  setTasksToShow,
  showAllTasks = false,
}) => {
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasksToShow(storedTasks);
    }
  }, [setTasksToShow]);

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

      setTasksToShow((prevTasks) => [newTask, ...prevTasks]);
    },
    [setTasksToShow]
  );

  const handleShowAllTasks = useCallback(() => {
    setTasksToShow(tasksToShow);
  }, [tasksToShow, setTasksToShow]);

  const handleDeleteAllTasks = () => {
    setTasksToShow([]);
    localStorage.removeItem("tasks");
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasksToShow.filter((task) => task.id !== taskId);
    setTasksToShow(updatedTasks);
  };

  const handleCheckboxChange = useCallback(
    (taskId) => {
      const updatedTasks = tasksToShow.map((task) => {
        if (task.id === taskId) {
          return { ...task, isChecked: !task.isChecked };
        }
        return task;
      });

      const sortedTasks = [...updatedTasks].sort((a, b) => {
        if (a.isChecked && !b.isChecked) {
          return 1;
        }
        if (!a.isChecked && b.isChecked) {
          return -1;
        }
        return 0;
      });

      setTasksToShow(sortedTasks);
    },
    [tasksToShow, setTasksToShow]
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
