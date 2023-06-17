import { actionTypes } from "../actionTypes";

const { SET_OVERVIEW_INFO } = actionTypes;

export const setOverviewInfo = (payload) => {
  return {
    type: SET_OVERVIEW_INFO,
    payload,
  };
};
