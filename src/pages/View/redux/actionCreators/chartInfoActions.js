import { actionTypes } from "../actionTypes";

const { SET_CHART_INFO } = actionTypes;

export const setChartInfo = (payload) => {
  return {
    type: SET_CHART_INFO,
    payload,
  };
};
