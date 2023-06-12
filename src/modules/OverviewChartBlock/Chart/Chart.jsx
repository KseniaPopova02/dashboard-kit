import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledLineWrapper, StyledChartWrapper, StyledSpin } from "./style";
import { Header } from "../Header";
import { configChart } from "./config";
import { Line } from "@ant-design/charts";
import { setChartAxisData } from "../../../store";

export const Chart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartAxisData);

  useEffect(() => {
    dispatch(setChartAxisData());
  }, [dispatch]);

  if (!data || data.length === 0) {
    return <StyledSpin size="large" />;
  }

  const config = {
    data,
    ...configChart,
  };

  return (
    <StyledChartWrapper>
      <Header />
      <StyledLineWrapper>
        <Line {...config} />
      </StyledLineWrapper>
    </StyledChartWrapper>
  );
};
