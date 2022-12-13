function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <>
      <input className="inputName" type="text" onChange={handleChange}></input>
    </>
  );
}

export default FilterByName;
