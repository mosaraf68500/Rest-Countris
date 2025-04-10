import React from 'react';

const Country = ({country}) => {
    console.log(country.maps.googleMaps)
    return (
        
        <div>
        <h2>name:{country.name.common}</h2>
        <img src={country.flags.png} alt="" />
        <p>independent: {country.independent? "Free" : "Not Free"}</p>
        <p>status:{country.status} </p>
        <p>population:{country.population}</p>

        </div>
    );
};

export default Country;