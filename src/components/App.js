import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
/*Components*/
import ListCharacters from './ListCharacters';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

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

  const findCharacter = (id) => {
    return dataChar.find((char) => char.id === parseInt(id));
  };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__text">Rick and Morty</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters handleFilterName={handleFilterName} />
              <ListCharacters characters={filterData} />
            </>
          }
        ></Route>
        <Route
          path="/character/:characterId"
          element={<CharacterDetail findCharacter={findCharacter} />}
        ></Route>
      </Routes>
      <footer className="footer">
        <h3 className="footer__h3">Rick and Morty</h3>
        <p className="footer__p">Created by Justin Roiland and Dan Harmon</p>
      </footer>
    </div>
  );
}

export default App;
