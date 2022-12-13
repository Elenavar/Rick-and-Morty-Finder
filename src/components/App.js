import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';

import ListCharacters from './ListCharacters';

function App() {
  const [dataChar, setDataChar] = useState([]);

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataChar(cleanData);
    });
  }, []);

  return (
    <div>
      <h1>Rock and Morty</h1>
      <ListCharacters characters={dataChar}></ListCharacters>
    </div>
  );
}

export default App;
