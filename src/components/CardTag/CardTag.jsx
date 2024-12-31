import React from "react";
import "./CardTag.css";

const CardTag = ({ data }) => {
  return <li className={`card__tag ${data.tagClass}`}>{data.tagName}</li>;
};

export default CardTag;
