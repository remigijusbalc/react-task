import React from "react";
import { Input } from "@material-ui/core";

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, value }) => {
  return (
    <Input
      style={{ marginLeft: "auto" }}
      onChange={onChange}
      placeholder="Search"
      value={value}
    />
  );
};

export default SearchBar;
