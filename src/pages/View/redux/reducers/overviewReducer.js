import { actionTypes } from "../actionTypes";

const {
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK_CHECKBOX,
  DELETE_ALL_TASKS,
  SET_TICKETS_DATA,
  SET_OVERVIEW_INFO,
  SET_CHART_INFO,
  SET_CHART_AXIS,
} = actionTypes;

const initialState = {
  tasks: [],
  tickets: [],
  overviewInfo: [],
  chartInfo: [],
  axis: [],
};

export const overviewPageReducer = (state = initialState, action) => {
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

    case SET_TICKETS_DATA:
      return {
        ...state,
        tickets: action.payload,
      };

    case SET_OVERVIEW_INFO:
      return {
        ...state,
        overviewInfo: action.payload,
      };

    case SET_CHART_INFO:
      return {
        ...state,
        chartInfo: action.payload,
      };

    case SET_CHART_AXIS:
      return {
        ...state,
        axis: action.payload,
      };

    default:
      return state;
  }
};
