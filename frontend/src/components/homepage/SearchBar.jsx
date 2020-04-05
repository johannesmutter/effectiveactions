import React, { useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Input
      action={
        <Button className="home-search-button">
          <Link
            className="home-search-link"
            to={{
              pathname: "/articles",
              state: { search: search },
            }}
          >
            <Icon name="search" color="grey" />
          </Link>
        </Button>
      }
      placeholder="search for actions by keyword, topic, or region"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
