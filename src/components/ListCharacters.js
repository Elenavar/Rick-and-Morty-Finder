import Character from './Character';
import '../styles/components/ListCharacters.scss';

const ListCharacters = ({ characters }) => {
  const charElement = characters.map((char) => {
    return <Character character={char} />;
  });

  return (
    <section className="section">
      <ul className="section__list">{charElement}</ul>
    </section>
  );
};

export default ListCharacters;
