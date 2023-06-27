import { actionTypes } from "../../actionTypes";

const {
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK_CHECKBOX,
  DELETE_ALL_TASKS,
} = actionTypes;

export const setTasks = (payload) => ({
  type: SET_TASKS,
  payload,
});

export const setTaskToAdd = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const setTaskToDelete = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const setTaskCheckboxToUpdate = (id) => ({
  type: UPDATE_TASK_CHECKBOX,
  payload: id,
});

export const setAllTasksToDelete = () => ({
  type: DELETE_ALL_TASKS,
});
