import { Api, USERS } from "../../../api";

export const addNewUsers = (newUser) => {
  return async () => {
    try {
      await Api.post(USERS, newUser);
    } catch (error) {
      console.log(error);
    }
  };
};
