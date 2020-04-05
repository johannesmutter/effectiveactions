import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "validated", text: "Validated", value: "validated" },
  { key: "non-validated", text: "Not Validated", value: "non-validated" },
];

const Endorsement = () => {
  return (
    <Dropdown
      placeholder="Endorsement"
      fluid
      multiple
      selection
      options={options}
    />
  );
};

export default Endorsement;
