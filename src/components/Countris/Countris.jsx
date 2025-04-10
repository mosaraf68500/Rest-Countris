import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countrisePromises}) => {

    const countries=use(countrisePromises);
   
    return (
        
        <div>
        <h1>My travel Countries...</h1>
        {
            countries.map(country =><Country key={country.cca3} country={country}></Country>)
        }

        </div>
    );
};

export default Countries;