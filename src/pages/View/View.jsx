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
} from "./redux";

export const View = () => {
  const dispatch = useDispatch();
  const infoChart = useSelector((state) => state.chartInfo);
  const tickets = useSelector((state) => state.tickets);
  const overviewInfo = useSelector((state) => state.overviewInfo);
  const tasks = useSelector((state) => state.tasks);
  const axis = useSelector((state) => state.axis);

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
