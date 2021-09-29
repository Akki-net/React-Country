import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ search, setSearch ] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      })
  }, []);

  const filterHandler = Event => {
    setSearch(Event.target.value);
  };

  const filteredList = search === '' ? countries : countries.filter(c => {
    const word = new RegExp(search, 'i');
    if(c.name.common.search(word) !== -1){
      return c;
    }
  });


  return(
  <div>
     Find countries:
    <input onChange={filterHandler} />
    <Filter countries={filteredList} /> 
  </div>

  )
}

export default App