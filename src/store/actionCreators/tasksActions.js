export const setTasksToShow = (tasks) => ({
  type: "SET_TASKS_TO_SHOW",
  payload: tasks,
});

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
