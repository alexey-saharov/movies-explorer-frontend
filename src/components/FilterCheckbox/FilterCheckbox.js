import './FilterCheckbox.css';

function FilterCheckbox({ isFilterChecked, onFilterToggle }) {

  return (
    <div
      className={`filter-checkbox ${isFilterChecked && 'filter-checkbox_checked'} link`}
      onClick={onFilterToggle}
    >
      <div className={`filter-checkbox__circle ${isFilterChecked && 'filter-checkbox__circle_checked'}`}></div>
    </div>
  );
}

export default FilterCheckbox;
