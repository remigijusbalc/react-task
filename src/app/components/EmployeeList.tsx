import React from "react";
import List from "@material-ui/core/List";
import EmployeeListItem from "./EmployeeListItem";
import EmptyListItem from "./EmptyListItem";
import { Employee } from "../redux/employees/employees.types";

interface EmployeeListProps {
  employees: Employee[];
  onSelect: (employee: Employee) => void;
  activeEmployee: Employee;
}

const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  onSelect,
  activeEmployee
}) => {
  if (employees.length === 0) return <EmptyListItem text="No results" />;
  return (
    <List>
      {employees.map(e => {
        return (
          <div
            key={e.id}
            onClick={() => {
              onSelect(e);
            }}
          >
            <EmployeeListItem
              active={activeEmployee && activeEmployee.id === e.id}
              grow={false}
              key={e.id}
              employee={e}
            />
          </div>
        );
      })}
    </List>
  );
};

export default EmployeeList;
