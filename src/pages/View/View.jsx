import React, { useEffect } from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChartBlock,
} from "../../modules";
import { StyledWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  fetchInfoChartData,
  fetchOverviewInfo,
  fetchOverviewTickets,
  fetchChartAxis,
} from "../../store";

export const View = () => {
  const dispatch = useDispatch();
  const infoChart = useSelector((state) => state.overviewPage.chartInfo);
  const tickets = useSelector((state) => state.overviewPage.tickets);
  const overviewInfo = useSelector((state) => state.overviewPage.overviewInfo);
  const tasks = useSelector((state) => state.overviewPage.tasks);
  const axis = useSelector((state) => state.overviewPage.axis);
  console.log(tasks);

  useEffect(() => {
    dispatch(fetchOverviewTickets());
    dispatch(fetchOverviewInfo());
    dispatch(fetchInfoChartData());
    dispatch(fetchChartAxis());
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <OverviewInfo overviewInfo={overviewInfo} />
      <OverviewChartBlock axis={axis} infoChart={infoChart} />
      <StyledWrapper>
        <OverviewTickets tickets={tickets} />
        <OverviewTask tasks={tasks.slice(0, 3)} />
      </StyledWrapper>
    </>
  );
};
