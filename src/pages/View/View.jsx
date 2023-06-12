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
  setChartInfo,
  setTickets,
  setOverviewInfo,
  setTasksToShow,
} from "../../store";

export const View = () => {
  const dispatch = useDispatch();
  const infoChart = useSelector((state) => state.chartInfo);
  const tickets = useSelector((state) => state.tickets);
  const overviewInfo = useSelector((state) => state.overviewInfo);
  const tasksToShow = useSelector((state) => state.tasks.tasksToShow);

  useEffect(() => {
    dispatch(setTickets());
    dispatch(setOverviewInfo());
    dispatch(setChartInfo());
    dispatch(setTasksToShow());
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
