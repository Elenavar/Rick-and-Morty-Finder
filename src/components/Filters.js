// import FilterBySpecie from './FilterBySpecie';
import FilterByName from './FilterByName';

function Filters(props) {
  return (
    // <FilterBySpecie
    //   handleFilterSpecie={props.handleFilterSpecie}
    // ></FilterBySpecie>
    <FilterByName handleFilterName={props.handleFilterName}></FilterByName>
  );
}

export default Filters;
