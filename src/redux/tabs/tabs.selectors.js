export const getActiveTabIndex = state => {
  return state.tabs.activeTabIndex;
};

export const getActiveTab = state => {
  return state.tabs.tabs[getActiveTabIndex(state)];
};
