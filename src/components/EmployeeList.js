import React from "react";
import List from "@material-ui/core/List";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({ employeesArray, onSelect }) {
  return (
    <List dense={true}>
      {employeesArray.map(employee => {
        return (
          <li>
            <div
              key={employee.id}
              onClick={() => {
                onSelect(employee);
              }}
            >
              <EmployeeListItem key={employee.id} employee={employee} />
            </div>
          </li>
        );
      })}
    </List>
  );
}
