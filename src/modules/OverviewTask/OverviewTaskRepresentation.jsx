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
  StyledBtn,
  StyledBin,
  StyledTaskBtnWrapper,
} from "./style";
import { ROUTES } from "../../routes";

export const OverviewTaskRepresentation = ({
  tasks,
  showAllTasks,
  onSubmit,
  handleShowAllTasks,
  handleDeleteAllTasks,
  handleDeleteTask,
  handleCheckboxChange,
}) => {
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
          {tasks.map((task) => (
            <StyledTaskTextWrapper key={task.id}>
              <StyledTaskNameWrapper>
                <StyledCheckbox
                  checked={task.isChecked}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <div>{task.taskName}</div>
              </StyledTaskNameWrapper>
              <StyledTaskBtnWrapper>
                {renderFlag(task.flags)}
                <StyledBtn
                  type="button"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <StyledBin />
                </StyledBtn>
              </StyledTaskBtnWrapper>
            </StyledTaskTextWrapper>
          ))}
        </div>
      ) : (
        <StyledNoTasks>No tasks yet</StyledNoTasks>
      )}
    </StyledTaskWrapper>
  );
};
