import React from "react";
import Card from "../Card/Card";
import "./CardsList.css";

const CardsList = ({ data }) => {
  return (
    <>
      <ul className="cards">
        {data.map((item) => (
          <Card data={item} />
        ))}
      </ul>
    </>
  );
};

export default CardsList;
