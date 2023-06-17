import { actionTypes } from "../actionTypes";

const {
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK_CHECKBOX,
  DELETE_ALL_TASKS,
} = actionTypes;

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case UPDATE_TASK_CHECKBOX:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isChecked: !task.isChecked };
        }
        return task;
      });

    case DELETE_ALL_TASKS:
      return [];

    default:
      return state;
  }
};
