import { actionTypes } from "../actionTypes";

const { SET_SRC } = actionTypes;
const initialState = {
  src: null,
};
export const photoInputReducer = (state = initialState.src, action) => {
  switch (action.type) {
    case SET_SRC:
      return action.payload;
    default:
      return state;
  }
};
