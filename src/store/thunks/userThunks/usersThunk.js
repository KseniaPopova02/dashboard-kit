import { Api, USERS } from "../../../api";
import { setCurrentUser } from "../../actionCreators";

export const addNewUsers = (newUser) => {
  return async () => {
    try {
      await Api.post(USERS, newUser);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUser = (values) => {
  return async (dispatch) => {
    try {
      const users = await Api.get(USERS);
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (user) {
        dispatch(setCurrentUser(user));
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
