import { Api, CHART_AXIS } from "../../../api";
import { setChartAxis } from "../../actionCreators";

export const fetchChartAxis = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(CHART_AXIS);
      dispatch(setChartAxis(response));
    } catch (error) {
      console.log(error);
    }
  };
};
