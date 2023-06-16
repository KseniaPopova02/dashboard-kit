import { actionTypes } from "../actionTypes";

export const setOverviewTickets = (payload) => {
  return {
    type: actionTypes.SET_TICKETS_DATA,
    payload,
  };
};
