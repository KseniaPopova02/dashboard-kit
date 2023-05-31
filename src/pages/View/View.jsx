import React, { useState, useEffect } from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChartBlock,
} from "../../modules";
import { StyledWrapper } from "./style";

export const View = () => {
  const [tasksToShow, setTasksToShow] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksToShow));
  }, [tasksToShow]);
  return (
    <>
      <OverviewInfo />

      <OverviewChartBlock />
      <StyledWrapper>
        <OverviewTickets />
        <OverviewTask
          tasksToShow={tasksToShow.slice(0, 3)}
          setTasksToShow={setTasksToShow}
        />
      </StyledWrapper>
    </>
  );
};
