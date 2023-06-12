import { Api, OVERVIEW_INFO } from "../../API";

export const setOverviewInfo = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(OVERVIEW_INFO);
      dispatch({
        type: "SET_OVERVIEW_INFO",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
