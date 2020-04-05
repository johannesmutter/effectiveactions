import React from "react";
import { Dropdown } from "semantic-ui-react";
const sortOptions = [
  {
    key: "all",
    text: "Name",
    value: "all",
  },
  {
    key: "validated",
    text: "Validated",
    value: "validated",
  },
  {
    key: "newest",
    text: "Newest",
    value: "newest",
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
        Sort by{" "}
        <Dropdown
          onChange={handleFilters}
          inline
          options={sortOptions}
          defaultValue={sortOptions[0].value}
          className="sort"
        />{" "}
        order by{" "}
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
