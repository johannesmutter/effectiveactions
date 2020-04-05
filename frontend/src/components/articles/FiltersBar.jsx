import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import SearchBar from "./../SearchBar";
import Topic from "./filters/Topic";
import Tag from "./filters/Tag";
import Region from "./filters/Region";
import Endorsement from "./filters/Endorsement";
import ClearFilters from "./filters/ClearFilters";
import SortBy from "./filters/SortBy";

import "../../styles/filters.css";

const FiltersBar = ({
  resetFilters,
  handleFilters,
  currentFilters,
  solutionsResultNumber,
}) => {
  return (
    <div id="filters-bar">
      <div className="first-part">
        <SearchBar handleFilters={handleFilters} />
        <Topic handleFilters={handleFilters} />
        <Tag handleFilters={handleFilters} />
        <Region
          handleFilters={handleFilters}
          filterValues={currentFilters.region}
        />
        <Endorsement handleFilters={handleFilters} />
      </div>
      <div className="second-part">
        <ClearFilters resetFilters={resetFilters} />
        <Button basic size="mini">
          {solutionsResultNumber} results
        </Button>
        <SortBy handleFilters={handleFilters} />
      </div>
    </div>
  );
};

export default FiltersBar;
