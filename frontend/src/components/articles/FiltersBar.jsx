import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import Search from "./filters/Search";
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
        <Search
          handleFilters={handleFilters}
          filterValues={currentFilters.search}
        />
        <Topic handleFilters={handleFilters} />
        <Tag handleFilters={handleFilters} />
        <Region
          handleFilters={handleFilters}
          filterValues={currentFilters.region}
        />
        <Endorsement handleFilters={handleFilters} />
      </div>
      <div className="second-part">
        <div id="clear-filter">
          <ClearFilters resetFilters={resetFilters} />
        </div>
        <div id="results-number">
          <Button basic size="mini">
            {solutionsResultNumber} results
          </Button>
        </div>
        <div id="sort-by">
          <SortBy handleFilters={handleFilters} />
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
