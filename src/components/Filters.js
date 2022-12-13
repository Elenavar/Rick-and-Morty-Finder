// import FilterBySpecie from './FilterBySpecie';
import filterByName from './FilterByName';

function Filters(props) {
  return (
    // <FilterBySpecie
    //   handleFilterSpecie={props.handleFilterSpecie}
    // ></FilterBySpecie>
    <filterByName handleFilterByName={props.handleFilterByName}></filterByName>
  );
}

export default Filters;
