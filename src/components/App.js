import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

import ListCharacters from './ListCharacters';
import Filters from './Filters';

function App() {
  const [dataChar, setDataChar] = useState([]);
  const [filterBySpecie, setFilterBySpecie] = useState('');

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataChar(cleanData);
    });
  }, []);

  const handleFilterSpecie = (specie) => {
    setFilterBySpecie(specie);
  };

  return (
    <div>
      <h1>Rock and Morty</h1>
      <ListCharacters characters={dataChar}></ListCharacters>
      <Filters handleFilterSpecie={handleFilterSpecie}></Filters>
    </div>
  );
}

export default App;
