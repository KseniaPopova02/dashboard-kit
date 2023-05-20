import { useState, useEffect } from "react";
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
  StyledCheckbox,
  StyledTaskNameWrapper,
} from "./style";
import { ROUTES } from "../../Routes";

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

  const onSubmit = (values) => {
    const newTask = {
      id: Date.now(),
      taskName: values.taskName,
      flags: values.flags,
      isChecked: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleShowAllTasks = () => {
    setDisplayTasks(tasks.length);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    const filtredTasks = updatedTasks.filter((task) => !task.isChecked);

    setTasks(filtredTasks);
  };

  return (
    <StyledTaskWrapper>
      <StyledHeaderWrapper>
        <div>
          <StyledTaskTitle>Tasks</StyledTaskTitle>
          <StyledSubTitle>Today</StyledSubTitle>
        </div>

        <StyledLink
          to={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW_TASKS}`}
          onClick={handleShowAllTasks}
        >
          View all
        </StyledLink>
        {showAllTasks ? (
          <StyledLink to={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW}`}>
            Back
          </StyledLink>
        ) : null}
      </StyledHeaderWrapper>
      <FormContent
        onSubmit={onSubmit}
        handleDeleteAllTasks={handleDeleteAllTasks}
      />
      {tasks.length > 0 ? (
        <div>
          {tasks
            .slice(0, showAllTasks ? tasks.length : displayTasks)
            .map((task) => (
              <StyledTaskTextWrapper key={task.id}>
                <StyledTaskNameWrapper>
                  <StyledCheckbox
                    checked={task.isChecked}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  <div>{task.taskName}</div>
                </StyledTaskNameWrapper>

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
