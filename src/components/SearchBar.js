import React from "react";

export default function SearchBar({ onChange, value }) {
  return <input onChange={onChange} placeholder="Search" value={value} />;
}
