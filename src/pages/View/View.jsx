import React, { useEffect } from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChartBlock,
} from "../../modules";
import { StyledWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setTasksToShow } from "../../store";
import { fetchInfoData } from "../../modules/OverviewChartBlock/Info/redux";
import { fetchOverviewInfo } from "../../modules/OverviewInfo/redux";
import { fetchOverviewTickets } from "../../modules/OverviewTickets/redux";
import { fetchChartAxis } from "../../modules/OverviewChartBlock/Chart/redux";

export const View = () => {
  const dispatch = useDispatch();
  const infoChart = useSelector((state) => state.chartInfo);
  const tickets = useSelector((state) => state.tickets);
  const overviewInfo = useSelector((state) => state.overviewInfo);
  const tasksToShow = useSelector((state) => state.tasks.tasksToShow);
  const axis = useSelector((state) => state.axis);

  useEffect(() => {
    dispatch(fetchOverviewTickets());
    dispatch(fetchOverviewInfo());
    dispatch(fetchInfoData());
    dispatch(fetchChartAxis());
    dispatch(setTasksToShow());
  }, [dispatch]);

  return (
    <>
      <OverviewInfo overviewInfo={overviewInfo} />
      <OverviewChartBlock axis={axis} infoChart={infoChart} />
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
