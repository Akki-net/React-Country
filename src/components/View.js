import React, { useState } from 'react';
import Capital from './Capital';
import Languages from './Languages';
import Flag from './Flag';

const View = ({ country, index, showme }) => {
    
    if(showme[index] === true){
        return(
            <div>
                <Capital  key={country.toString()} capital={country.capital} />
                <Languages key={country.toString()} language={country.languages} />
                <Flag key={country.flags.svg} png={country.flags.png} />   
            </div>
        )
    }
    return <> </>
};

export default View