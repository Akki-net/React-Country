import React from 'react';

const Flag = ({png}) => {
    return(
        <div>
            <img src={png} width="150px" height="auto" alt={png}/>
        </div>
    )
}

export default Flag