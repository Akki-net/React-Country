import React, { useState } from "react";
import View from './View';

const Filter = ({countries}) => {
let list = [];
let alertMsg = '';
const [ show,setShow ] = useState(new Array(list.length).fill(false));

    const changeHandler = (i) => {
        const arr = [...show]; 
        if(arr[i] === false)
        arr[i] = true;
        else
        arr[i] = false;

        setShow(arr);
    };


if(countries.length === 250){
   alertMsg =  "";
}
else if(countries.length > 10){
    alertMsg = 'Too many matches, specify another filter';
}
else if(countries.length < 10){
    list = countries.map((c,i) => {
        return(
            <div key={c.toString()}>
                <h1 key={c.toString()}>{c.name.common}</h1>
                <button onClick={() => changeHandler(i)}>Show</button>
                <View key={c.toString()} country={c} showme={show} index={i} />
            </div>
        )
    })
}
else{
    alertMsg =  "";  
}
return (
   <div>
       {alertMsg}
       {list}  
   </div>
)

};

export default Filter