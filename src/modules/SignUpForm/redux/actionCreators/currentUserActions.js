import { actionTypes } from "../actionTypes";

const { SET_CURRENT_USER } = actionTypes;

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});
