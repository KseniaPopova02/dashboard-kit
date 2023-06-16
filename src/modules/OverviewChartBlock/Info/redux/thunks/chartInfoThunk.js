import { Api, CHART_INFO } from "../../../../../API";
import { setChartInfo } from "../actionCreators";

export const fetchInfoData = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(CHART_INFO);
      dispatch(setChartInfo(response));
    } catch (error) {
      console.log(error);
    }
  };
};
