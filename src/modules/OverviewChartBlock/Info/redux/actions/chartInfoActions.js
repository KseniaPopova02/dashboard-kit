import { actionTypes } from "../actionTypes";

export const setChartInfo = (payload) => {
  return {
    type: actionTypes.SET_CHART_INFO,
    payload,
  };
};
