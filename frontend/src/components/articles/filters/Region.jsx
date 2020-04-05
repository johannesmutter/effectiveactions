import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "europe", text: "Europe", value: "europe" },
  { key: "asia", text: "Asia", value: "asia" },
  { key: "north-america", text: "North America", value: "north-america" },
  { key: "south-america", text: "South America", value: "south-america" },
  { key: "australia", text: "Australia", value: "australia" },
];

const Region = ({ handleFilters, filterValues }) => {
  return (
    <>
      <Dropdown
        onChange={handleFilters}
        placeholder="Region"
        className="region"
        fluid
        multiple
        search
        selection
        value={filterValues}
        options={options}
      />
    </>
  );
};

export default Region;
