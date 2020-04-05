import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "children", text: "Children", value: "children" },
  { key: "sport", text: "Sport", value: "sport" },
  { key: "education", text: "Education", value: "education" },
  { key: "food", text: "Food", value: "food" },
];

const Tag = () => {
  return (
    <Dropdown
      placeholder="Tags"
      fluid
      multiple
      search
      selection
      options={options}
    />
  );
};

export default Tag;
