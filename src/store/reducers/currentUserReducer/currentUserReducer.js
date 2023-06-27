import { actionTypes } from "../../actionTypes";

const { SET_CURRENT_USER } = actionTypes;

const initialState = {
  currentUser: null,
};

export const currentUserReducer = (
  state = initialState.currentUser,
  action
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
