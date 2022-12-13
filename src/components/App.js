import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
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

  const { pathname } = useLocation();

  const dataUrl = matchPath('/character/:id', pathname);
  const userId = dataUrl !== null ? dataUrl.params.userid : null;

  const characterFound = dataChar.find((char) => char.id === userId);
  return (
    <div className="page">
      <h1>Rick and Morty</h1>
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
          path="/character/:id"
          element={<CharacterDetail character={characterFound} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
