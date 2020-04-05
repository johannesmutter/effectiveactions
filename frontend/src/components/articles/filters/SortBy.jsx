import React from "react";
import { Dropdown } from "semantic-ui-react";
const sortOptions = [
  {
    key: "all",
    text: "Name",
    value: "Name",
  },
  {
    key: "validated",
    text: "Validated",
    value: "Featured",
  },
  {
    key: "newest",
    text: "Newest",
    value: "Added Date",
  },
];
const orderOptions = [
  {
    key: "ASC",
    text: "ASC",
    value: "ASC",
  },
  {
    key: "DESC",
    text: "DESC",
    value: "DESC",
  },
];

const SortBy = ({ handleFilters }) => {
  return (
    <>
      <span>
        Sort by&nbsp;
        <Dropdown
          onChange={handleFilters}
          inline
          options={sortOptions}
          defaultValue={sortOptions[0].value}
          className="sort"
        />&nbsp;
        order by&nbsp;
        <Dropdown
          onChange={handleFilters}
          inline
          options={orderOptions}
          defaultValue={orderOptions[0].value}
          className="order"
        />
      </span>
    </>
  );
};

export default SortBy;
