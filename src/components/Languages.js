import React from 'react';

const Languages = ({language}) => {
    let text = [];
    for(const [key,value] of Object.entries(language)){
        
        text.push(value);
    }

    return(
        <div>
            <h3>Languages</h3>
        <ul>
          {text.map(t => <li key={t}> {t} </li>)}
        </ul>
        </div>
    )
}

export default Languages