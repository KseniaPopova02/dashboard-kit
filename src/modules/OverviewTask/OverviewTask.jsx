import { useState, useEffect } from "react";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./FormConfig";
import { FormContent } from "./FormContent";
import {
  StyledTaskWrapper,
  StyledTaskTitle,
  StyledSubTitle,
  StyledHeaderWrapper,
  StyledLink,
  StyledNoTasks,
  StyledTaskTextWrapper,
  StyledSpanUrgent,
  StyledSpanDefault,
  StyledSpanNew,
} from "./style";

export const OverviewTask = ({ showAllTasks = false }) => {
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
    <StyledTaskWrapper>
      <StyledHeaderWrapper>
        <div>
          <StyledTaskTitle>Tasks</StyledTaskTitle>
          <StyledSubTitle>Today</StyledSubTitle>
        </div>

        <StyledLink
          to="/dashboard/overview-tasks"
          onClick={() => handleShowAllTasks()}
        >
          View all
        </StyledLink>
      </StyledHeaderWrapper>

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
              <StyledTaskTextWrapper key={task.id}>
                <div>{task.taskName}</div>
                {task.flags === "urgent" && (
                  <StyledSpanUrgent>Urgent</StyledSpanUrgent>
                )}
                {task.flags === "new" && <StyledSpanNew>New</StyledSpanNew>}
                {task.flags === "default" && (
                  <StyledSpanDefault>Default</StyledSpanDefault>
                )}
              </StyledTaskTextWrapper>
            ))}
        </div>
      ) : (
        <StyledNoTasks>No tasks yet</StyledNoTasks>
      )}
    </StyledTaskWrapper>
  );
};
