import React, { useState, useEffect } from "react";
import Card from "./Card";
import FiltersBar from "./FiltersBar";
import "../../styles/grid.css";

async function getSolutionsByFilter(filter) {
  const res = await fetch("http://localhost:9060/solutions", {
    method: "post",
    body: JSON.stringify({ filter: filter }),
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  console.log("data received:", data);

  if (res.status === 200) {
    return data.records;
  } else {
    throw new Error(data);
  }
}

const CardsGrid = () => {
  const [filters, setFilters] = useState({
    search: "",
    sort: [],
    order: "ASC",
    challenge: [],
    stage: [], // e.g. idea/ concept/ prototype/ ...
    type: [], // e.g. product/ service/ build environment
    region: [],
    forProfit: null,
    stakeholder: [],
    endorsement: [],
    sort: "",
    order: "",
  });
  const resetFilters = () => {
    setFilters({
      search: "",
      sort: [],
      order: "ASC",
      challenge: [],
      stage: [], // e.g. idea/ concept/ prototype/ ...
      type: [], // e.g. product/ service/ build environment
      region: [],
      forProfit: null,
      stakeholder: [],
      endorsement: [],
      sort: "",
      order: "",
    });
  };
  const handleFilters = (e, data) => {
    let newFilters = { ...filters };
    newFilters[data.className] = data.value;
    setFilters(newFilters);
  };

  useEffect(() => {
    console.log("getting solutions using filters", filters);
    getSolutionsByFilter(filters);
  }, [filters]);
  const [solutions, setSolutions] = useState([]);

  // Display all solutions on load
  useEffect(() => {
    setFilters({ sort: ["Name"], order: "ASC" });
  }, []);

  return (
    <div>
      <FiltersBar
        currentFilters={filters}
        resetFilters={resetFilters}
        handleFilters={handleFilters}
        solutionsResultNumber={solutions.length}
      />
      {console.log(solutions)}
      <h1>solutions</h1>
      <div className="menu">
        <a
          href="#"
          onClick={() => setFilters({ sort: ["Name"], order: "ASC" })}
        >
          All Solutions
        </a>
        <a
          href="#"
          onClick={() => setFilters({ sort: ["Added Date"], order: "ASC" })}
        >
          Newest
        </a>
        <a href="#" onClick={() => setFilters({ validated: true })}>
          Validated
        </a>
      </div>
      <div className="grid">
        {solutions.length &&
          solutions.map((solution) => (
            <Card key={solution.id} id={solution.id} data={solution.fields} />
          ))}
      </div>
    </div>
  );
};

export default CardsGrid;
