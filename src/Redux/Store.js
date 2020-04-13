import {createStore, combineReducers} from "redux";
import todoListReducer from "./reducers/todoListReducer";
import settingsReducer from "./reducers/settingsReducer";

const reducers = combineReducers({
  todolists: todoListReducer,
  settings: settingsReducer
})

const store = createStore(reducers);
export default store;