import FilterBySpecie from './FilterBySpecie';
import FilterByName from './FilterByName';
import '../styles/components/Filter.scss';

function Filters(props) {
  return (
    <form className="filters">
      <FilterByName handleFilterName={props.handleFilterName}></FilterByName>
      <FilterBySpecie
        handleFilterSpecie={props.handleFilterSpecie}
      ></FilterBySpecie>
    </form>
  );
}

export default Filters;
