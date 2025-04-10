import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countrisPromis }) => {
  const countries = use(countrisPromis);
  console.log(countries);

  return (
    <div >
      <h1>My travel Countries...</h1>

      <div className="countries">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
