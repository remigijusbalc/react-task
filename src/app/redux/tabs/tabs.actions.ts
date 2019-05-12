import { Employee } from "../employees/employees.types";

export const PUSH_TAB = "PUSH_TAB";
export const REMOVE_TAB = "REMOVE_TAB";
export const MOUNT_TAB = "MOUNT_TAB";
export const EDIT_DETAILS = "EDIT_DETAILS";

export function pushTab(employee: Employee) {
  return { type: PUSH_TAB, tab: employee };
}
export function removeTab(employee: Employee) {
  return { type: REMOVE_TAB, tab: employee };
}

export function mountTab(index: number) {
  return { type: MOUNT_TAB, activeIndex: index };
}

export const editDetails = (
  tabIndex: number,
  input: string,
  property: string
) => {
  return { type: EDIT_DETAILS, tabIndex, property, input };
};
