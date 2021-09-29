import React from 'react';

const Capital = ({list}) => {
    let clist = [];
    if(list == []){

    }
    else{
        clist = list.capital.map(c =>      
                <p>{c}</p>
        )
    }

    return <> 
    {clist}
    </>
}

export default Capital