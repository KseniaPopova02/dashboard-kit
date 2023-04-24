import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const OverviewTask = ({ showAllTasks }) => {
  const [tasks, setTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState(3);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const initialValues = {
    taskName: "",
    flags: "default",
  };

  const validationSchema = Yup.object().shape({
    taskName: Yup.string().required("Task name is required"),
  });

  const onSubmit = (values, actions) => {
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
      <h2>Add Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form>
            <div>
              <Field type="text" name="taskName" placeholder="Task name" />
              {formikProps.touched.taskName && formikProps.errors.taskName && (
                <div>{formikProps.errors.taskName}</div>
              )}
            </div>
            <div>
              <label>
                <Field type="radio" name="flags" value="urgent" />
                Urgent
              </label>
              <label>
                <Field type="radio" name="flags" value="new" />
                New
              </label>
              <label>
                <Field type="radio" name="flags" value="default" />
                Default
              </label>
            </div>
            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <>
          <div>
            <button type="button" onClick={handleDeleteAllTasks}>
              Delete all tasks
            </button>
          </div>
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
        </>
      ) : (
        <div>No tasks yet</div>
      )}
      {!showAllTasks && tasks.length > 3 && (
        <div>
          <Link to="/overview-tasks" onClick={() => handleShowAllTasks()}>
            View all tasks
          </Link>
        </div>
      )}
    </div>
  );
};
