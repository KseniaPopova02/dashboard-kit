import React, { useState, useEffect } from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChartBlock,
} from "../../modules";
import { StyledWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setChartInfo, setTickets, setOverviewInfo } from "../../store";

export const View = () => {
  const dispatch = useDispatch();
  const infoChart = useSelector((state) => state.chartInfo);
  const tickets = useSelector((state) => state.tickets);
  const overviewInfo = useSelector((state) => state.overviewInfo);

  const [tasksToShow, setTasksToShow] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksToShow));
  }, [tasksToShow]);

  useEffect(() => {
    dispatch(setTickets());
    dispatch(setOverviewInfo());
    dispatch(setChartInfo());
  }, [dispatch]);

  return (
    <>
      <OverviewInfo overviewInfo={overviewInfo} />
      <OverviewChartBlock infoChart={infoChart} />
      <StyledWrapper>
        <OverviewTickets tickets={tickets} />
        <OverviewTask
          tasksToShow={tasksToShow.slice(0, 3)}
          setTasksToShow={setTasksToShow}
        />
      </StyledWrapper>
    </>
  );
};
