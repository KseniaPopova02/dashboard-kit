import { actionTypes } from "../actionTypes";

const {
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK_CHECKBOX,
  DELETE_ALL_TASKS,
} = actionTypes;

export const setTasks = (payload) => {
  return {
    type: SET_TASKS,
    payload,
  };
};
