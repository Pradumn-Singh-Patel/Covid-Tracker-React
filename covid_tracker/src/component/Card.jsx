import React, { useState, useEffect } from "react";
import numeral from "numeral";
import "./Card.css";

function Card({ get_data, input_val }) {
  const [info, setinfo] = useState("");

  useEffect(() => {
    const url =
      get_data === true && input_val
        ? `https://disease.sh/v3/covid-19/countries/${input_val}`
        : "https://disease.sh/v3/covid-19/all";

    const getCountriesData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setinfo(data);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className="boxes">
      <h2 className="coutry-name">
        {input_val ? input_val : "ENTIRE WORLD"}
        <i class="fas fa-arrow-right"></i>
      </h2>
      <div className="cards">
        <div className="card-1">
          <div className="blank-1"></div>
          <p>Cases</p>
          <strong>{numeral(info.cases).format("0,0")}</strong>
          <p>Today</p>
          <strong>{numeral(info.todayCases).format("0,0")}</strong>
        </div>
        <div className="card-2">
          <div className="blank-2"></div>
          <p> Recovered</p>
          <strong>{numeral(info.recovered).format("0,0")}</strong>
          <p>Today</p>
          <strong>{numeral(info.todayRecovered).format("0,0")}</strong>
        </div>
        <div className="card-3">
          <div className="blank-3"></div>
          <p> Deaths</p>
          <strong>{numeral(info.deaths).format("0,0")}</strong>
          <p>Today</p>
          <strong>{numeral(info.todayDeaths).format("0,0")}</strong>
        </div>
      </div>
    </div>
  );
}

export default Card;
