import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ls from '../services/localStorage';
/*Components*/
import ListCharacters from './ListCharacters';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [dataChar, setDataChar] = useState([]);
  const [filterBySpecie, setFilterBySpecie] = useState('');
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    callToApi().then((cleanData) => {
      setDataChar(cleanData);
    });
  }, []);

  const handleFilterSpecie = (specie) => {
    setFilterBySpecie(specie);
    ls.set('FilterByName', specie);
  };

  const handleFilterName = (name) => {
    setFilterByName(name);
    ls.set('FilterByName', name);
  };

  const filterData = dataChar
    .filter((char) => char.name.includes(filterByName))
    .filter((char) => char.specie === filterBySpecie);

  const findCharacter = (id) => {
    return dataChar.find((char) => char.id === parseInt(id));
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Filters handleFilterName={handleFilterName} />
              <ListCharacters characters={filterData} />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/character/:characterId"
          element={
            <>
              <Header />
              <CharacterDetail findCharacter={findCharacter} />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/character/undefined"
          element={<CharacterDetail findCharacter={findCharacter} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
