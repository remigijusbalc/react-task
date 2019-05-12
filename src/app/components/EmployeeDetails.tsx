import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { Employee } from "../redux/employees/employees.types";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { Card, List } from "@material-ui/core";
interface EmployeeDetailsProps {
  employee: Employee;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  saveInputChanges: (object: Employee, property: keyof Employee) => void;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({
  employee,
  onChange,
  saveInputChanges
}) => {
  const propertiesToPreview: { text: string; jsonProp: keyof Employee }[] = [
    { text: "Call Office", jsonProp: "officePhone" },
    { text: "Call Mobile", jsonProp: "mobilePhone" },
    { text: "SMS", jsonProp: "mobilePhone" },
    { text: "Email", jsonProp: "email" }
  ];

  return (
    <React.Fragment>
      <Card style={{ backgroundColor: "#ffefef" }}>
        <EmployeeListItem active={false} grow employee={employee} />
      </Card>
      {propertiesToPreview.map(value => {
        return (
          <List key={value.text + employee.title}>
            <ListItem>
              <ListItemText
                disableTypography={true}
                primary={value.text}
                secondary={
                  <Input
                    style={{ width: "100%", color: "grey" }}
                    name={value.jsonProp}
                    value={employee[value.jsonProp]}
                    onChange={onChange}
                  />
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  name={value.jsonProp}
                  onClick={() => saveInputChanges(employee, value.jsonProp)}
                >
                  <ArrowRight />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        );
      })}
    </React.Fragment>
  );
};

export default EmployeeDetails;
