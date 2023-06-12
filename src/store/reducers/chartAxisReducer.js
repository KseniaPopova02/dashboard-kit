import { initialState } from "../initialState";

export const chartAxisReducer = (
  state = initialState.chartAxisData,
  action
) => {
  switch (action.type) {
    case "SET_CHART_AXIS_DATA":
      return action.payload;
    default:
      return state;
  }
};
