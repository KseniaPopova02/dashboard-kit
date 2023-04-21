import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const OverviewTask = () => {
  const [tasks, setTasks] = useState([]);

  const initialValues = {
    taskName: "",
    flags: {
      urgent: false,
      new: false,
      default: true,
    },
  };

  const validationSchema = Yup.object().shape({
    taskName: Yup.string().required("Task name is required"),
  });

  const onSubmit = (values, actions) => {
    const newTask = {
      taskName: values.taskName,
      flags: values.flags,
    };

    setTasks((prevTasks) => {
      if (prevTasks.length === 3) {
        return [newTask, ...prevTasks.slice(0, 2)];
      } else {
        return [newTask, ...prevTasks];
      }
    });

    actions.resetForm();
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
                <Field type="checkbox" name="flags.urgent" />
                Urgent
              </label>
              <label>
                <Field type="checkbox" name="flags.new" />
                New
              </label>
              <label>
                <Field type="checkbox" name="flags.default" />
                Default
              </label>
            </div>
            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.taskName}>
          <span>{task.taskName}</span>
          {task.flags.urgent && <span>Urgent</span>}
          {task.flags.new && <span>New</span>}
          {task.flags.default && <span>Default</span>}
        </div>
      ))}
      <div>
        <a href="/all-tasks">View all tasks</a>
      </div>
    </div>
  );
};
