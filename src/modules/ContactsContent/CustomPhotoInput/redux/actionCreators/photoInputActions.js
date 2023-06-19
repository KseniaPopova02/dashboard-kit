import { actionTypes } from "../actionTypes";

const { SET_SRC } = actionTypes;
export const setSrc = (payload) => ({
  type: SET_SRC,
  payload,
});
