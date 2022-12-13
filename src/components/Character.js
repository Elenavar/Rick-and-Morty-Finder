import '../styles/components/Character.scss';

function Character(props) {
  return (
    <li className="character">
      <a className="character__link" href={props.character.id}>
        <img
          className="character__link--img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <div className="character__link--info info">
          <h2 className="info__name">{props.character.name}</h2>
          <p className="info__specie">{props.character.specie}</p>
        </div>
      </a>
    </li>
  );
}

export default Character;
