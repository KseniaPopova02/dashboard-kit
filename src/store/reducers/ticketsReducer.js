import { initialState } from "../initialState";

export const ticketsReducer = (state = initialState.tickets, action) => {
  switch (action.type) {
    case "SET_TICKETS":
      return action.payload;
    default:
      return state;
  }
};
