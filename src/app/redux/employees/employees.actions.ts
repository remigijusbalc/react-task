export const SAVE_EMPLOYEE_CHANGES = "SAVE_EMPLOYEE_CHANGES";

export const saveEmployeeChanges = (
  parentIndex: number,
  property: string,
  value: any
) => {
  return { type: SAVE_EMPLOYEE_CHANGES, parentIndex, property, value };
};
