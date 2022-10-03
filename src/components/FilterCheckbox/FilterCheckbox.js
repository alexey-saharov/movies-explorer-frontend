import { useState } from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`filterCheckbox ${isChecked && 'filterCheckbox_checked'}`} onClick={handleChange}>
      <div className={`filterCheckbox__circle ${isChecked && 'filterCheckbox__circle_checked'}`}></div>
    </div>
  );
}

export default FilterCheckbox;
