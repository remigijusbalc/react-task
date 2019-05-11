export const SAVE_EMPLOYEE_CHANGES = "SAVE_EMPLOYEE_CHANGES";

export const editEmployee = (tabIndex, input, property) => {
  return { type: SAVE_EMPLOYEE_CHANGES, tabIndex: tabIndex, property, input };
};
