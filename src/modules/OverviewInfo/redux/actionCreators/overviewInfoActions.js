import { actionTypes } from "../actionTypes";

export const setOverviewInfo = (payload) => {
  return {
    type: actionTypes.SET_OVERVIEW_INFO,
    payload,
  };
};
