import React from "react";
import { Button } from "semantic-ui-react";

const ClearFilters = ({ resetFilters }) => {
  return (
    <Button size="mini" onClick={resetFilters}>
      clear filters
    </Button>
  );
};

export default ClearFilters;
