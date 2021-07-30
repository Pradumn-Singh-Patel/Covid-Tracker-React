import React from "react";
import numeral from "numeral";
import "./Card.css";

function Card({ name, info_1, info_2, className_1, className_2 }) {
  return (
    <>
      <div className={className_1}>
        <div className={className_2}></div>
        <p>{name}</p>
        <strong>{numeral(info_1).format("0,0")}</strong>
        <p>Today</p>
        <strong>{numeral(info_2).format("0,0")}</strong>
      </div>
    </>
  );
}

export default Card;
