import * as employeeActions from "./employees.actions";
import employeeData from "./employees.mock";
import { Employee } from "./employees.types";
import produce from "immer";

interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: employeeData
};

export default function(state = initialState, action: any): EmployeesState {
  switch (action.type) {
    case employeeActions.SAVE_EMPLOYEE_CHANGES:
      return produce(state, draft => {
        const { parentIndex, property, value } = action;
        const employee = draft.employees[parentIndex];
        const key = property as keyof Employee;
        employee[key] = value;
      });
    default:
      return state;
  }
}
