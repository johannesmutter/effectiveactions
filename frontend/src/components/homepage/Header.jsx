import React from "react";
import SearchBar from "../SearchBar";
import JoinWizard from "../forms/JoinWizard";
import Statistics from "../homepage/Statistics";
import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <JoinWizard
        trigger={
          <button>
            <img
              className="join"
              src="/images/Join the community.png"
              alt="join-btn"
            />
          </button>
        }
      />
      <SearchBar />
      <Statistics />
    </div>
  );
};

export default Header;
