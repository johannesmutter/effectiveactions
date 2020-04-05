import React from "react";
import { Input } from "semantic-ui-react";

const Search = ({ handleFilters, filterValues }) => {
  return (
    <Input
      icon="search"
      iconPosition="left"
      placeholder="search for actions by keyword, topic, or region"
      className="search"
      onChange={handleFilters}
      value={filterValues}
    />
  );
};

export default Search;
