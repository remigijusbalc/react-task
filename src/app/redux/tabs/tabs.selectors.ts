import { RootState } from "../store";

export const getTabs = (state: RootState) => {
  return state.tabs.tabs;
};

export const getActiveTabIndex = (state: RootState) => {
  return state.tabs.activeTabIndex;
};

export const getActiveTab = (state: RootState) => {
  return state.tabs.tabs[state.tabs.activeTabIndex];
};

export const getEmployeesArray = (state: RootState) => {
  return state.employeeData.employees;
};
