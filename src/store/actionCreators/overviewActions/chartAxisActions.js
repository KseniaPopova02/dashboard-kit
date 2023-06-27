import { actionTypes } from "../../actionTypes";

const { SET_CHART_AXIS } = actionTypes;

export const setChartAxis = (payload) => {
  return {
    type: SET_CHART_AXIS,
    payload,
  };
};
