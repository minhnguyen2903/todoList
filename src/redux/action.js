import ActionType from "./actionType";

export const AddTodo = (payload) => {
  return {
    type: ActionType.ADD_TODO,
    payload,
  };
};

export const DeleteTodo = (payload) => {
  return {
    type: ActionType.DELETE_TODO,
    payload,
  };
};

export const EditTodo = (payload) => {
  return {
    type: ActionType.EDIT_TODO,
    payload,
  };
};

export const SwitchTodoStatus = (payload) => {
  return {
    type: ActionType.SWITCH_TODO_STATUS,
    payload,
  };
};

export const SearchByText = (payload) => {
  return {
    type: ActionType.FILTER_BY_TEXT,
    payload,
  };
};

export const SearchByStatus = (payload) => {
  return {
    type: ActionType.FILTER_BY_STATUS,
    payload,
  };
};

export const SearchByPriority = (payload) => {
  return {
    type: ActionType.FILTER_BY_PRIORITY,
    payload,
  };
};
