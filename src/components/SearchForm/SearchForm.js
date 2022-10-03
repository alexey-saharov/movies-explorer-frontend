import { useState } from 'react';
import './SearchForm.css';
import searchForm_icon from '../../images/searchForm-icon.svg';
import logo from "../../images/header-logo.svg";

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
          <div className="search-form__icon" style = {{ backgroundImage: `url(${searchForm_icon})`}}></div>

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
          <div className="search-form__search-filter-checkbox"></div>
          <p className="search-form__search-filter-text">Короткометражки</p>
        </div>


      </form>

      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
