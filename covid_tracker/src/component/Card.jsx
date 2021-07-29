import React, { useState, useEffect } from "react";
import numeral from "numeral";
import "./Card.css";

function Card({ get_data, input_val }) {
  const [info, setinfo] = useState("");
  // const [api, setapi] = useState("https://disease.sh/v3/covid-19/all");

  //  if (get_data === true) {
  //    setapi("https://disease.sh/v3/covid-19/countries/" + { input_val });
  //  }

  console.log(get_data);

  // if (get_data === true) {
  //   setapi("pradumn");
  //     console.log(input_val);
  // }

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setinfo(data);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className="boxes">
      <h3>ENTIRE WORLD</h3>
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
