function CharacterDetail(props) {
  return (
    <article className="characterDetails">
      <img
        className="characterDetails__img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
      />
      <h2 className="characterDetails__name">{props.character.name}</h2>
      <p className="characterDetails__info">Status:{props.character.status}</p>
      <p className="characterDetails__info">Species:{props.character.specie}</p>
      <p className="characterDetails__info">
        Origin:{props.character.origin.name}
      </p>
      <p className="characterDetails__info">
        Episodes:{props.character.episodes}
      </p>
    </article>
  );
}

export default CharacterDetail;
