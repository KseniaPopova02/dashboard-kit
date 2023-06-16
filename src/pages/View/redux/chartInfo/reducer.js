import { actionTypes } from "./actionsTypes";

const initialState = {
  chartInfo: [],
};

export const chartInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_INFO:
      return { ...state, chartInfo: action.payload };
    default:
      return state;
  }
};
