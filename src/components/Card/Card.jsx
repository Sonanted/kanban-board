import React from "react";
import "./Card.css";
import CardTag from "../CardTag/CardTag";

const Card = ({ data }) => {
  return (
    <li className="card">
      <h3 className="card__heading">{data.title}</h3>
      <ul className="card__tags">
        {data.tags.map((tag) => (
          <CardTag data={tag} />
        ))}
      </ul>
      <p className="card__description">{data.description}</p>
    </li>
  );
};

export default Card;
