import * as employeeActions from "./employees.actions";
import employeeData from "./employees.mock";

const initialState = {
  employees: employeeData
};

export default function(state = initialState, action) {
  switch (action.type) {
    case employeeActions.SAVE_EMPLOYEE_CHANGES: {
      return {
        employees: action.payload
      };
    }
    default:
      return state;
  }
}
