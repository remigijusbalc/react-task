import * as tabsActions from "./tabs.actions";
import produce from "immer";

const initialState = {
  tabs: [],
  activeTabIndex: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case tabsActions.PUSH_TAB:
      return produce(state, draft => {
        draft.tabs.push(action.tab);
        draft.activeTabIndex = draft.tabs.length - 1;
      });

    case tabsActions.REMOVE_TAB:
      return produce(state, draft => {
        const tab = action.tab;
        draft.tabs = state.tabs.filter(t => t.id !== tab.id);
        draft.activeTabIndex = draft.tabs.length - 1;
      });

    case tabsActions.MOUNT_TAB:
      return produce(state, draft => {
        draft.activeTabIndex = action.activeIndex;
      });

    case tabsActions.EDIT_DETAILS:
      return produce(state, draft => {
        const { tabIndex, property, input } = action;
        draft.tabs = state.tabs.slice(0);
        draft.tabs[tabIndex][property] = input;
      });

    default:
      return state;
  }
}
