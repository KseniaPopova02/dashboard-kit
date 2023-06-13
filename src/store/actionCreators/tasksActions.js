import { Api, TASKS } from "../../API";

export const setTasksToShow = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(TASKS);
      dispatch({
        type: "SET_TASKS",
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await Api.delete(`${TASKS}/${taskId}`);
      dispatch({ type: "DELETE_TASK", payload: taskId });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTaskCheckbox = (taskId) => ({
  type: "UPDATE_TASK_CHECKBOX",
  payload: taskId,
});

export const deleteAllTasks = () => {
  return async (dispatch) => {
    try {
      const tasks = await Api.get(TASKS);
      for (const task of tasks) {
        await Api.delete(`${TASKS}/${task.id}`);
      }

      dispatch({
        type: "DELETE_ALL_TASKS",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
