import { Api, OVERVIEW_INFO } from "../../../../API";
import { setOverviewInfo } from "../actions";

export const fetchOverviewInfo = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(OVERVIEW_INFO);
      dispatch(setOverviewInfo(response));
    } catch (error) {
      console.log(error);
    }
  };
};
