import { Api, TICKETS } from "../../../api";
import { setOverviewTickets } from "../../actionCreators";

export const fetchOverviewTickets = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(TICKETS);
      dispatch(setOverviewTickets(response));
    } catch (error) {
      console.log(error);
    }
  };
};
