import {createStore, combineReducers, applyMiddleware} from "redux";
import todoListReducer from "./reducers/todoListReducer";
import settingsReducer from "./reducers/settingsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  todolists: todoListReducer,
  settings: settingsReducer
})

type ReducerType= typeof reducers;
export  type TodoStateType= ReturnType<ReducerType>

const store = createStore(reducers, applyMiddleware(thunk));
export default store;