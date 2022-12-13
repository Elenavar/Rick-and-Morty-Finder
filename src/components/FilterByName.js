import '../styles/components/FilterByName.scss';

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <div className="filterName">
      <input
        className="filterName__input"
        type="text"
        placeholder="Example: Rick..."
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default FilterByName;
