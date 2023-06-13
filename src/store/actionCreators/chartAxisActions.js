import { Api, CHART_AXIS } from "../../API";

export const setChartAxisData = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(CHART_AXIS);
      dispatch({
        type: "SET_CHART_AXIS_DATA",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
