export const PUSH_TAB = "PUSH_TAB";
export const REMOVE_TAB = "REMOVE_TAB";
export const MOUNT_TAB = "MOUNT_TAB";
export const EDIT_DETAILS = "EDIT_DETAILS";

export function pushTab(employee) {
  return { type: PUSH_TAB, tab: employee };
}
export function removeTab(employee) {
  return { type: REMOVE_TAB, tab: employee };
}

export function mountTab(index) {
  return { type: MOUNT_TAB, activeIndex: index };
}

export const editDetails = (tabIndex, input, property) => {
  return { type: EDIT_DETAILS, tabIndex, property, input };
};
