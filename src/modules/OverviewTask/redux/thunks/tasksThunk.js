import { Api, TASKS } from "../../../../API";
import {
  setTasks,
  setTaskToDelete,
  setAllTasksToDelete,
} from "../actionCreators";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(TASKS);
      dispatch(setTasks(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      const response = await Api.delete(`${TASKS}/${id}`);
      dispatch(setTaskToDelete(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAllTasks = () => {
  return async (dispatch) => {
    try {
      const tasks = await Api.get(TASKS);
      for (const task of tasks) {
        await Api.delete(`${TASKS}/${task.id}`);
      }
      dispatch(setAllTasksToDelete());
    } catch (error) {
      console.log(error);
    }
  };
};
