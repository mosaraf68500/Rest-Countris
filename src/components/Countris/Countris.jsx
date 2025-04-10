import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countrisPromis }) => {
  const countries = use(countrisPromis);
  console.log(countries);

  const [visitedCountries , setVisitedCountries]=useState([]);

  const handleVisitedCountries=(country)=>{
    console.log('visited countries btn clicked', country);
  }

  return (
    <div >
      <h1>My travel Countries...</h1>
      <h3>My visited Countries: {visitedCountries}</h3>

      <div className="countries">
        {countries.map((country) => (
          <Country 
          key={country.cca3}
           country={country}
           handleVisitedCountries={handleVisitedCountries}

           ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
