import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

import ListCharacters from './ListCharacters';
import Filters from './Filters';

function App() {
  const [dataChar, setDataChar] = useState([]);
  // const [filterBySpecie, setFilterBySpecie] = useState('');
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataChar(cleanData);
    });
  }, []);

  // const handleFilterSpecie = (specie) => {
  //   setFilterBySpecie(specie);
  // };

  const handleFilterName = (name) => {
    setFilterByName(name);
  };

  const filterData = dataChar.filter((char) =>
    char.name.includes(filterByName)
  );

  return (
    <div className="page">
      <h1>Rick and Morty</h1>
      <Filters handleFilterName={handleFilterName}></Filters>
      <ListCharacters characters={filterData}></ListCharacters>
    </div>
  );
}

export default App;
