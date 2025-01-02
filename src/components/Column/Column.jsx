import React from "react";

import CardsList from "../CardsList/CardsList";

import "./Column.css";

const Column = ({ className, title, data }) => {
  return (
    <li className={`column ${className}`}>
      <div className="column__header">
        <h2 className="column__heading">{title}</h2>
        <div className="column__buttons">
          <button className="button column__button button-burger">≡</button>
          <button className="button column__button button-add">+</button>
        </div>
      </div>
      <CardsList data={data} />
    </li>
  );
};

export default Column;
