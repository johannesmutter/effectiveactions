import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "europe", text: "Europe", value: "Europe" },
  { key: "asia", text: "Asia", value: "Asia" },
  { key: "north-america", text: "North America", value: "North-America" },
  { key: "south-america", text: "South America", value: "South-America" },
  { key: "australia", text: "Australia", value: "Australia" },
  { key: "global", text: "Global", value: "Global" },
  { key: "germany", text: "Germany", value: "Germany" },
  { key: "united-states", text: "United States", value: "United States" },
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
