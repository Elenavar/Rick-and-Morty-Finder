import '../styles/components/FilterBySpecie.scss';

function FilterBySpecie(props) {
  const handleChange = (ev) => {
    props.handleFilterSpecie(ev.target.value);
  };
  return (
    <>
      <select className="select" id="specie" onChange={handleChange}>
        <option value="all" defaultValue>
          All
        </option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
}

export default FilterBySpecie;
