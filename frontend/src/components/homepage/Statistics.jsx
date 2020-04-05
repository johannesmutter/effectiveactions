import React from "react";
import "../../styles/statistics.css"

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="stats-actions">
        <span>1000</span>
        <span>actions</span>
      </div>
      <div className="stats-votes">
        <span>4390</span>
        <span>votes</span>
      </div>
      <div className="stats-verified">
        <span>233</span>
        <span>verified</span>
      </div>
    </div>
  );
};

export default Statistics;
