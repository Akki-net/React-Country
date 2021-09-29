import React from "react";
import Capital from './Capital';
import Languages from './Languages';
import Flag from './Flag';

const Filter = ({countries}) => {
let list = [];
let alertMsg = '';
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
                <Capital  key={c.toString()} capital={c.capital} />
                <Languages key={c.toString()} language={c.languages} />
                <Flag key={c.flags.svg} png={c.flags.png} />
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