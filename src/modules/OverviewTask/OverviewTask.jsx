import { useState, useEffect } from "react";
import { OverviewTaskRepresentation } from "./OverviewTaskRepresentation";
import { nanoid } from "nanoid";

export const OverviewTask = ({ showAllTasks = false }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onSubmit = (values) => {
    const newTask = {
      id: nanoid(),
      taskName: values.taskName,
      flags: values.flags,
      isChecked: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleShowAllTasks = () => {
    setTasks(tasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
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

    setTasks(sortedTasks);
  };

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
