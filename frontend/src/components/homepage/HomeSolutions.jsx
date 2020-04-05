import React, { useState, useEffect } from "react";
import Card from "../articles/Card";
import "../../styles/grid.css";

async function getSolutions() {
  const res = await fetch("http://localhost:9060/home-solutions", {
    method: "post",
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  if (res.status === 200) {
    return data.records;
  } else {
    throw new Error(data);
  }
}

const HomeSolutions = () => {
  useEffect(() => {
    (async () => {
      const result = await getSolutions();
      console.log("received solutions: ", result);
      setSolutions(result);
    })();
  }, []);
  const [solutions, setSolutions] = useState([]);
  return (
    <div className="grid">
      {solutions.length &&
        solutions.map((solution) => (
          <Card key={solution.id} id={solution.id} data={solution.fields} />
        ))}
    </div>
  );
};

export default HomeSolutions;
