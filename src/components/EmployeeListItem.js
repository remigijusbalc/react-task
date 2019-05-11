import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

export default function EmployeeListItem({ employee }) {
  const { firstName, lastName, id, title, pic } = employee;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={require(`../assets/${pic}`)} />
      </ListItemAvatar>
      <ListItemText primary={`${firstName} ${lastName}`} secondary={title} />
    </ListItem>
  );
}
