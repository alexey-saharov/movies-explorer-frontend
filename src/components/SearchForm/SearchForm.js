import { useState } from 'react';
import './SearchForm.css';
import searchFormIcon from '../../images/searchform-icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const [movie, setMovie] = useState('');

  function handleChangeMovie(e) {
    setMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchMovie({  movie });
  }

  return (
    <section className="search-form">

      <form action="src/components/App#" className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__search-field">
          <div className="search-form__icon" style = {{ backgroundImage: `url(${searchFormIcon})`}}></div>

          <input
            type="text"
            id="movie"
            name="movie"
            className="search-form__input"
            required
            placeholder="Фильм"
            value={movie}
            onChange={handleChangeMovie}
          />

          <button type="submit" aria-label="Найти" className="search-form__button-submit">Найти</button>

        </div>
        <div className="search-form__search-filter">
          <div className="search-form__vertical-line"></div>
          <FilterCheckbox />
          <p className="search-form__search-filter-text">Короткометражки</p>
        </div>


      </form>

      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
