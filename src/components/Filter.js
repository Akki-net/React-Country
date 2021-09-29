import react from "react";
import Capital from './Capital';

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
    list = countries.map((c,i) => <h1 key={Math.random() * i}>{c.name.common}</h1>)
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