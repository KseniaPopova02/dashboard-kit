import { actionTypes } from "./actionsTypes";

export const setChartInfo = (payload) => {
  return {
    type: actionTypes.SET_CHART_INFO,
    payload: payload,
  };
};
