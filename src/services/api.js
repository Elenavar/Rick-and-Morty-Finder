const callToApi = () => {
  // Llamamos a la API
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const cleanData = data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          image: char.image,
          specie: char.species,
          origin: char.origin,
          episodes: char.episode.length,
          status: char.status,
        };
      });
      return cleanData;
    });
};

export default callToApi;
