import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Employee } from "../redux/employees/employees.types";

interface EmployeeListItemProps {
  employee: Employee;
  grow: boolean;
  active: boolean;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({
  employee,
  grow = false,
  active
}) => {
  const { firstName, lastName, title, pic } = employee;
  const avatarStyle = grow ? { width: "20%", height: "20%" } : {};
  return (
    <ListItem selected={!grow && active}>
      <ListItemAvatar>
        <Avatar style={avatarStyle} src={require(`../../assets/${pic}`)} />
      </ListItemAvatar>
      <ListItemText primary={`${firstName} ${lastName}`} secondary={title} />
    </ListItem>
  );
};

export default EmployeeListItem;
