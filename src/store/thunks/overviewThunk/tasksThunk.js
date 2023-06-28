import { Api, TASKS } from "../../../api";
import {
  setTasks,
  setTaskToAdd,
  setTaskToDelete,
  setAllTasksToDelete,
  setTaskCheckboxToUpdate,
} from "../../actionCreators";

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

export const updateTaskCheckbox = (id) => {
  return async (dispatch, getState) => {
    try {
      const tasks = getState().tasks.tasks;
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        const updatedTask = {
          ...taskToUpdate,
          isChecked: !taskToUpdate.isChecked,
        };
        await Api.patch(TASKS, id, updatedTask);
        dispatch(setTaskCheckboxToUpdate(id));
      }
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
