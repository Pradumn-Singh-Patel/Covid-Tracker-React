import React, { useState } from "react";
import "./Main.css";
import Menu from "../assets/Menu1.png";
import Covid from "../assets/corona.jpg";

function Main() {
  const [styles, setstyles] = useState("-100rem");
  function clicked() {
    styles == "-100rem" || styles == !0 ? setstyles(0) : setstyles("-100rem");
  }
  return (
    <>
      <nav>
        <div className="head">
          Fight <span className="covid"> Covid</span>
        </div>

        <img className="menu" src={Menu} alt="Menu" onClick={() => clicked()} />

        <ul style={{ left: styles }}>
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
          <input type="text" placeholder="Country Name" />
          <div className="btn">Search</div>
        </div>
      </nav>
      <div className="center">
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
    </>
  );
}

export default Main;
