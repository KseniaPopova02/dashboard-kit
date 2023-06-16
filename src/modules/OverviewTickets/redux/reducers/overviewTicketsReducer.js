import { actionTypes } from "../actionTypes";

const initialState = {
  ticketsData: [],
};

export const overviewTicketsReducer = (
  state = initialState.ticketsData,
  action
) => {
  switch (action.type) {
    case actionTypes.SET_TICKETS_DATA:
      return action.payload;
    default:
      return state;
  }
};
