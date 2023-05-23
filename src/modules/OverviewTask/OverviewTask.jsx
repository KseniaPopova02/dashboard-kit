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

  const renderFlag = (flag) => {
    if (flag === "urgent") {
      return <StyledSpanUrgent>Urgent</StyledSpanUrgent>;
    }
    if (flag === "new") {
      return <StyledSpanNew>New</StyledSpanNew>;
    }
    if (flag === "default") {
      return <StyledSpanDefault>Default</StyledSpanDefault>;
    }
  };

  return (
    <StyledTaskWrapper>
      <StyledHeaderWrapper>
        <div>
          <StyledTaskTitle>Tasks</StyledTaskTitle>
          <StyledSubTitle>Today</StyledSubTitle>
        </div>
        {showAllTasks ? null : (
          <StyledLink
            to={`${ROUTES.DASHBOARD}${ROUTES.OVERVIEW_TASKS}`}
            onClick={handleShowAllTasks}
          >
            View all
          </StyledLink>
        )}

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
      {tasks.length ? (
        <div>
          {tasks.slice(0, showAllTasks ? tasks.length : 3).map((task) => (
            <StyledTaskTextWrapper key={task.id}>
              <StyledTaskNameWrapper>
                <StyledCheckbox
                  checked={task.isChecked}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <div>{task.taskName}</div>
              </StyledTaskNameWrapper>
              {renderFlag(task.flags)}
            </StyledTaskTextWrapper>
          ))}
        </div>
      ) : (
        <StyledNoTasks>No tasks yet</StyledNoTasks>
      )}
    </StyledTaskWrapper>
  );
};
