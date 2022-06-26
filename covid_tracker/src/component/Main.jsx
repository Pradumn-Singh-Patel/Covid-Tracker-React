import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import "./Card.css";
import Menu from "../assets/Menu1.png";
import Covid from "../assets/corona.jpg";
import Table from "./Table";
import Card from "./Card";
import Cancel from "../assets/cancel.png";

function Main() {
  const [styles, setstyles] = useState("-100rem");
  const [TableData, setTableData] = useState([]);
  const [input_val, setinput_val] = useState("");
  const [url, seturl] = useState("https://disease.sh/v3/covid-19/all");
  const [value, setvalue] = useState(window.innerWidth);
  const [info, setinfo] = useState("");
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
  });

  const card_ref = useRef();

  function get_info() {
    {
      input_val
        ? seturl(`https://disease.sh/v3/covid-19/countries/${input_val}`)
        : seturl("https://disease.sh/v3/covid-19/all");
    }
    if (info.message) {
      console.log(info);
    } else {
      console.log("info ni h");
    }
    card_ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const getCountriesData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setinfo(data);
        });
    };

    getCountriesData();
  }, [url]);

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
      <div ref={card_ref} className="boxes">
        {info.message ? (
          <div className="e-card" style={{ backgroundColor: "red" }}>
            <div>
              <h3> {info.message} </h3>
            </div>
          </div>
        ) : (
          <>
            <h2 className="coutry-name">
              {input_val ? input_val : "ENTIRE WORLD"}
              <i class="fas fa-arrow-right"></i>
            </h2>
            <Card
              name="Cases"
              className_1="card-1"
              className_2="blank-1"
              info_1={info.cases}
              info_2={info.todayCases}
            />
            <Card
              name="Recovered"
              className_1="card-2"
              className_2="blank-2"
              info_1={info.recovered}
              info_2={info.todayRecovered}
            />
            <Card
              name="Deaths"
              className_1="card-3"
              className_2="blank-3"
              info_1={info.deaths}
              info_2={info.todayDeaths}
            />
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
}

export default Main;
