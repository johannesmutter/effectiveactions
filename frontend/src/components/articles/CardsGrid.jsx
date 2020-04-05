import React, { useState, useEffect } from "react";
import Card from "./Card";
import FiltersBar from "./FiltersBar";
import "../../styles/grid.css";

async function getSolutionsByFilter(filters) {
  console.log("running query with filter", filters);
  const res = await fetch("http://localhost:9060/solutions", {
    method: "post",
    body: JSON.stringify(filters),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  if (res.status === 200) {
    return data.records;
  } else {
    throw new Error(data);
  }
}

const CardsGrid = ({ search }) => {
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
    });
  };
  const handleFilters = (e, data) => {
    let newFilters = { ...filters };
    newFilters[data.className] = data.value;
    setFilters(newFilters);
  };

  useEffect(() => {
    (async () => {
      const result = await getSolutionsByFilter(filters);
      console.log("received solutions: ", result);
      setSolutions(result);
    })();
  }, [filters]);

  // Display all solutions on load
  useEffect(() => {
    search
      ? setFilters({ search: search, sort: ["Name"], order: "ASC" })
      : setFilters({ sort: ["Name"], order: "ASC" });
  }, []);
  const [solutions, setSolutions] = useState([]);

  return (
    <div>
      <h1>Browse effective actions</h1>
      <FiltersBar
        currentFilters={filters}
        resetFilters={resetFilters}
        handleFilters={handleFilters}
        solutionsResultNumber={solutions.length}
      />
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
