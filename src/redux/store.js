import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

import voka from "./modules/voka";

const middlewares = [thunk];
const rootReducer = combineReducers({voka});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer)

export default store;