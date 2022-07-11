import { legacy_createStore as createStore, combineReducers } from "redux";
import voka from "./modules/voka";

const rootReducer = combineReducers({voka});

const store = createStore(rootReducer)

export default store;