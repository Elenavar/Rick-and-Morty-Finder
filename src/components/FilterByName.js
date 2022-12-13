function FilterByName(props) {
  return (
    <>
      <input type="text" onChange={props.handleFilterByName}></input>
    </>
  );
}

export default FilterByName;
