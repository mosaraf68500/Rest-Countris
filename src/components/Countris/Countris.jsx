import React, { use } from 'react';
import Country from '../Country/Country';

const Countris = ({countrisPromis}) => {

    const countris=use(countrisPromis);
    // console.log(countris)
    return (
        
        <div>
        <h1>My traval Countris...</h1>
        {
            countris.map(country =><Country country={country}></Country>)
        }

        </div>
    );
};

export default Countris;