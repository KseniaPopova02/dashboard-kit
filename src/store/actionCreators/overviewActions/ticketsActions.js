import { actionTypes } from "../../actionTypes";

const { SET_TICKETS_DATA } = actionTypes;

export const setOverviewTickets = (payload) => {
  return {
    type: SET_TICKETS_DATA,
    payload,
  };
};
