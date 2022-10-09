import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`filter-checkbox ${isChecked && 'filter-checkbox_checked'} link`} onClick={handleChange}>
      <div className={`filter-checkbox__circle ${isChecked && 'filter-checkbox__circle_checked'}`}></div>
    </div>
  );
}

export default FilterCheckbox;
