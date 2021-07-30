import React, { useState, useEffect } from "react";

import "./Main.css";
import Menu from "../assets/Menu1.png";
import Covid from "../assets/corona.jpg";
import Table from "./Table";
import Card from "./Card";
import Cancel from "../assets/cancel.png";

function Main() {
  const [styles, setstyles] = useState("-100rem");
  const [TableData, setTableData] = useState([]);
  const [get_data, setget_data] = useState(false);
  const [input_val, setinput_val] = useState("");
  const [value, setvalue] = useState(window.innerWidth);
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  function displayWindowSize() {
    setvalue(window.innerWidth);
  }

  function clicked() {
    styles == "-100rem" || styles == !0 ? setstyles(0) : setstyles("-100rem");
  }

  const sortData = (data) => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          let sortedData = sortData(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  function get_info() {
    get_data === false ? setget_data(true) : setget_data(false);
  }

  return (
    <>
      <nav>
        <div className="head">
          Fight <span className="covid"> Covid</span>
        </div>

        <img className="menu" src={Menu} alt="Menu" onClick={() => clicked()} />

        <ul style={{ left: styles }}>
          <img
            className="cancel"
            src={Cancel}
            alt="cancel"
            onClick={() => clicked()}
          />
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Prevention</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="Country Name"
            onChange={(e) => {
              setinput_val(e.target.value);
            }}
          />
          <div className="btn" onClick={() => get_info()}>
            Search
          </div>
        </div>
      </nav>
      <div className="center">
        <div className="container">
          <div className="info">
            <div className="info-1">
              <h5>Get Well Soon,Earth!</h5>
            </div>
            <h1>
              Let's Help <br /> Recover The Earth,
              <br /> Starts From Us!{" "}
            </h1>
            <p>
              The outbreak of the coronavirus issue <br />
              or called Covid-19 makes the Earth grieve.
            </p>
            <div className="button">
              <div className="btn">Learn More</div>
              <div className="btn">Watch Video</div>
            </div>
          </div>
          <img className="img" src={Covid} alt="covid" />
        </div>
        <Table countries={TableData} />
      </div>
      <Card get_data={get_data} input_val={input_val} />
    </>
  );
}

export default Main;
