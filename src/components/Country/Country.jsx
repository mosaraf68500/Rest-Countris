import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {

  const [visited, setVisited]=useState(false)
  const handleVisited=()=>{
    setVisited(!visited)
  }
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h2>name:{country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <p>independent: {country.independent ? "Free" : "Not Free"}</p>
      <p>status:{country.status} </p>
      <p>population:{country.population}</p>

      <button onClick={handleVisited}>{visited ? "Visisted":"Not Visited"}</button>
    </div>
  );
};

export default Country;
