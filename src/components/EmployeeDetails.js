import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export default function EmployeeDetails({
  employee,
  onChange,
  saveInputChanges
}) {
  const propertiesToPreview = [
    { text: "Call Office", jsonProp: "officePhone" },
    { text: "Call Mobile", jsonProp: "mobilePhone" },
    { text: "SMS", jsonProp: "mobilePhone" },
    { text: "Email", jsonProp: "email" }
  ];

  return (
    <div>
      <EmployeeListItem employee={employee} />
      {propertiesToPreview.map(value => {
        return (
          <ListItem key={value.text + employee.title}>
            <ListItemText
              primary={value.text}
              secondary={
                <input
                  name={value.jsonProp}
                  value={employee[value.jsonProp]}
                  onChange={onChange}
                />
              }
            />
            <ListItemSecondaryAction>
              <button name={value.jsonProp} onClick={saveInputChanges} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </div>
  );
}
