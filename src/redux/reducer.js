import ActionType from "./actionType";

const todo = [];

const filter = {
  byText: "",
  byStatus: "",
  byPriority: [],
};

export const todoReducer = (state = todo, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      const priority = ["low", "medium", "high"];
      return new Array(1000).fill(null).map((_, index) => {
        return {
          id: index,
          title: "Todo" + index,
          isCompleted: false,
          priority: priority[Math.floor(Math.random() * 3)],
        };
      });
    case ActionType.ADD_TODO:
      return [
        {
          id: state.length,
          ...action.payload,
          isCompleted: false,
        },
        ...state,
      ];
    case ActionType.DELETE_TODO:
      return state.filter((element) => element.id !== action.payload);
    case ActionType.EDIT_TODO:
      return state.map((element) => {
        if (element.id === action.payload.id) {
          Object.assign(element, action.payload);
        }
        return element;
      });
    case ActionType.SWITCH_TODO_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    default:
      return state;
  }
};

export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_TEXT:
      return {
        ...state,
        byText: action.payload,
      };
    case ActionType.FILTER_BY_STATUS:
      return {
        ...state,
        byStatus: action.payload,
      };
    case ActionType.FILTER_BY_PRIORITY:
      return {
        ...state,
        byPriority: action.payload,
      };
    default:
      return state;
  }
};
