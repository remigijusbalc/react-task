import { createStore, combineReducers } from "redux";
import { tabsReducer } from "./tabs";
import { employeesReducer } from "./employees";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  employeeData: employeesReducer,
  tabs: tabsReducer
});

export default createStore(rootReducer, composeWithDevTools());
