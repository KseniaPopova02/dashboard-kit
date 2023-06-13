import { Api, TICKETS } from "../../API";

export const setTickets = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(TICKETS);
      dispatch({
        type: "SET_TICKETS",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
