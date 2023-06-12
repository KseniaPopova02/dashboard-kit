import { Api, USERS } from "../../API";

export const setCurrentUser = (user) => {
  return async (dispatch) => {
    try {
      await Api.post(USERS, user);
      dispatch({ type: "SET_CURRENT_USER", payload: user });
    } catch (error) {
      console.log(error);
    }
  };
};
