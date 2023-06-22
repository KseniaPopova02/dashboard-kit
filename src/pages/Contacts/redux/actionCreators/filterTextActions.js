import { actionTypes } from "../actionTypes";

const { SET_FILTER_TEXT } = actionTypes;

export const setFilterText = (text) => ({
  type: SET_FILTER_TEXT,
  payload: text,
});
