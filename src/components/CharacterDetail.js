import { useParams } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';

function CharacterDetail(props) {
  const params = useParams();
  const charFound = props.findCharacter(params.characterId);
  return (
    <article className="article">
      <div class="characterDetails">
        <img
          className="characterDetails__img"
          src={charFound.image}
          alt={`Foto de ${charFound.name}`}
        />
        <div class="characterDetails__text">
          <h2 className="charFocharacterDetails__text--name">
            {charFound.name}
          </h2>
          <p className="charFocharacterDetails__text--info">
            Status: {charFound.status}
          </p>
          <p className="charFocharacterDetails__text--info">
            Species: {charFound.specie}
          </p>
          <p className="charFocharacterDetails__text--info">
            Origin: {charFound.origin.name}
          </p>
          <p className="charFocharacterDetails__text--info">
            Episodes: {charFound.episodes}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CharacterDetail;
