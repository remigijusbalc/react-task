import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <AppBar
      style={{ backgroundColor: "#ff5959" }}
      position="static"
      color="inherit"
    >
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
