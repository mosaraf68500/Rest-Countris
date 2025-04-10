import React from "react";
import "./Country.css";

const Country = ({ country }) => {

  const handleVisited=()=>{
    alert("visited btn clicked")
  }
  return (
    <div className="country">
      <h2>name:{country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <p>independent: {country.independent ? "Free" : "Not Free"}</p>
      <p>status:{country.status} </p>
      <p>population:{country.population}</p>

      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
};

export default Country;
