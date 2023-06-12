import { Api, CHART_INFO } from "../../API";

export const setChartInfo = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(CHART_INFO);
      dispatch({
        type: "SET_CHART_INFO",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
