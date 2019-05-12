import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface EmptyListItemProps {
  text: String;
}

const EmptyListItem: React.FC<EmptyListItemProps> = ({ text }) => {
  return (
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default EmptyListItem;
