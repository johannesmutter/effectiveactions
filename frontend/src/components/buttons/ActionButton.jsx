import React from "react";
import "../../styles/homepage.css";

const ActionButton = ({ title, icon }) => {
  return (
    <button className="action-btn">
      <h4>{title}</h4>
      <img src={icon} alt={title} />
    </button>
  );
};

export default ActionButton;
