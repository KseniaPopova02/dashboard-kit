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

export const overviewTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case UPDATE_TASK_CHECKBOX:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isChecked: !task.isChecked };
          }
          return task;
        }),
      };

    case DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};
