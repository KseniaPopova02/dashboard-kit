import React, { useState, useEffect } from "react";
import {
  OverviewInfo,
  OverviewTickets,
  OverviewTask,
  OverviewChartBlock,
} from "../../modules";
import { StyledWrapper } from "./style";
import ticketsData from "../../MockedData/TicketsOverview.json";
import overviewInfoData from "../../MockedData/InfoOverview.json";
import infoChartData from "../../MockedData/TodaysChartInfo.json";

export const View = () => {
  const [tasksToShow, setTasksToShow] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedTasks;
  });
  const [tickets, setTicket] = useState([]);
  const [overviewInfo, setOverviewInfo] = useState([]);
  const [infoChart, setInfoChart] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksToShow));
  }, [tasksToShow]);

  useEffect(() => {
    setTicket(ticketsData);
  }, []);

  useEffect(() => {
    setOverviewInfo(overviewInfoData);
  }, []);

  useEffect(() => {
    setInfoChart(infoChartData[0].data);
  }, []);

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
