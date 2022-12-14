import FilterBySpecie from './FilterBySpecie';
import FilterByName from './FilterByName';
import '../styles/components/Filter.scss';

function Filters(props) {
  return (
    <form className="filters">
      <FilterBySpecie
        handleFilterSpecie={props.handleFilterSpecie}
      ></FilterBySpecie>
      <FilterByName handleFilterName={props.handleFilterName}></FilterByName>
    </form>
  );
}

export default Filters;
