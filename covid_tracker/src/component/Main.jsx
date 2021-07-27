import React, { useState } from "react";
import "./Main.css";
import Menu from "../assets/Menu1.png";

function Main() {
  const [styles, setstyles] = useState("-100rem");
  function clicked() {
    styles == "-100rem" || styles == !0 ? setstyles(0) : setstyles("-100rem");
  }
  return (
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
  );
}

export default Main;
