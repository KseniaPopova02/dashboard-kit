import { useState, useEffect } from "react";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./FormConfig";
import { Link } from "react-router-dom";
import { FormContent } from "./FormContent";

export const OverviewTask = ({ showAllTasks = false }) => {
  const [tasks, setTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState(3);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const onSubmit = (values, actions) => {
    if (!values.taskName.trim() === "") {
      actions.setFieldError("taskName", "Task name is red");
      return;
    }
    const newTask = {
      id: Date.now(),
      taskName: values.taskName,
      flags: values.flags,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);

    actions.resetForm();
  };

  const handleShowAllTasks = () => {
    setDisplayTasks(tasks.length);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div>
      <div>
        <h2>Tasks</h2>
        <div>today</div>
        <div>
          <Link to="/overview-tasks" onClick={() => handleShowAllTasks()}>
            View all tasks
          </Link>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => <FormContent handleDeleteAllTasks={handleDeleteAllTasks} />}
      </Formik>
      {tasks.length > 0 ? (
        <div>
          {tasks
            .slice(0, showAllTasks ? tasks.length : displayTasks)
            .map((task) => (
              <div key={task.id}>
                <span>{task.taskName}</span>
                {task.flags === "urgent" && <span>Urgent</span>}
                {task.flags === "new" && <span>New</span>}
                {task.flags === "default" && <span>Default</span>}
              </div>
            ))}
        </div>
      ) : (
        <div>No tasks yet</div>
      )}
    </div>
  );
};
