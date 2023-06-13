import { initialState } from "../initialState";

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS_TO_SHOW":
      return {
        ...state,
        tasksToShow: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasksToShow: [action.payload, ...state.tasksToShow],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksToShow: state.tasksToShow.filter(
          (task) => task.id !== action.payload
        ),
      };
    case "UPDATE_TASK_CHECKBOX":
      return {
        ...state,
        tasksToShow: state.tasksToShow.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isChecked: !task.isChecked };
          }
          return task;
        }),
      };
    case "DELETE_ALL_TASKS":
      return {
        ...state,
        tasksToShow: [],
      };
    default:
      return state;
  }
};
