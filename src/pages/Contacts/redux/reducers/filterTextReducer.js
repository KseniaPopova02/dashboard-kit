import { actionTypes } from "../actionTypes";

const { SET_FILTER_TEXT } = actionTypes;

const initialState = {
  text: "",
};

export const filterTextAction = (state = initialState.text, action) => {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return action.payload;
    default:
      return state;
  }
};
