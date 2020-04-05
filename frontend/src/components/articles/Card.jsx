import React from "react";
import "../../styles/card.css";

const Card = ({ id, data }) => {
  return (
    <div className="card" key={id}>
      {console.log(data)}
      {data && data.Media && (
        <img src={data.Media[0].thumbnails.large.url} alt={data.Name} />
      )}
      <h2>{data.Name}</h2>
      {data && data.Summary !== "undefined" && (
        <p className="summary">{data.Summary}</p>
      )}
      <p>
        <a href={data.Link} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </p>
    </div>
  );
};

export default Card;
