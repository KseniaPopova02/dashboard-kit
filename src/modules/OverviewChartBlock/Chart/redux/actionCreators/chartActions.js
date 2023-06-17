import { actionTypes } from "../actionTypes";

export const setChartAxis = (payload) => {
  return {
    type: actionTypes.SET_CHART_AXIS,
    payload,
  };
};
