import { Api, TASKS } from "../../../../API";
import {
  setTasks,
  setTaskToAdd,
  setTaskToDelete,
  setAllTasksToDelete,
} from "../actionCreators";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(TASKS);
      dispatch(setTasks(response.reverse()));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewTask = (newTask) => {
  return async (dispatch) => {
    try {
      await Api.post(TASKS, newTask).then(() =>
        dispatch(setTaskToAdd(newTask))
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await Api.delete(`${TASKS}/${id}`);
      dispatch(setTaskToDelete(id));
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
