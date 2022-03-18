import {
  combineReducers,
  createStore
} from "redux"
import {
  filterReducer,
  todoReducer
} from "./reducer"

import {
  composeWithDevTools
} from "@redux-devtools/extension"

const Reducers = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});


let store
if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  store = createStore(Reducers, composeWithDevTools());
} else {
  store = createStore(Reducers);
}

export default store


// const store = createStore(Reducers, composeWithDevTools())