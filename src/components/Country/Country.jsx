import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        
        <div>
        <h1>name:{country.name.common}</h1>

        </div>
    );
};

export default Country;