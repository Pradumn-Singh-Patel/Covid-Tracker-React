import React from "react";
import numeral from "numeral";
import "./Table.css";

function Table({ countries }) {
  return (
    <>
      <div className="data">
        <h3 style={{ textAlign: "center" }}>Live Cases by Country</h3>
        <div className="table">
          <tr
            style={{
              height: "3rem",
            }}
          >
            <th>Country</th>
            <th>Flag</th>
            <th>Cases</th>
          </tr>
          {countries.map((country) => (
            <tr>
              <td className="country-name">{country.country}</td>
              <td>
                <img src={country.countryInfo.flag} alt="flag" />{" "}
              </td>
              <td className="case">
                <strong>{numeral(country.cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
}
export default Table;
