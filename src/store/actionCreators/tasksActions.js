import { Api, OVERVIEW_INFO } from "../../API";

export const setTasksToShow = () => {
  return async (dispatch) => {
    try {
      const response = await Api.get(OVERVIEW_INFO);
      dispatch({
        type: "SET_OVERVIEW_INFO",
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

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});

export const updateTaskCheckbox = (taskId) => ({
  type: "UPDATE_TASK_CHECKBOX",
  payload: taskId,
});

export const deleteAllTasks = () => ({
  type: "DELETE_ALL_TASKS",
});
