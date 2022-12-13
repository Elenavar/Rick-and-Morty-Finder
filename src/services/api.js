const callToApi = () => {
  // Llamamos a la API
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const cleanData = data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          image: char.image,
          specie: char.species,
        };
      });
      return cleanData;
    });
};

export default callToApi;
