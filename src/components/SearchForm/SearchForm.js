import React, { useState } from 'react';
import './SearchForm.css';
import searchFormIcon from '../../images/searchform-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchString, setSearchString, onSearch, onSearchStringChange, isSearchShortMovie, onFilterToggle }) {
  const [searchMovieError, setSearchMovieError] = useState('');


  function handleValidation() {
    if (!searchString) {
      setSearchMovieError('Нужно ввести ключевое слово');
      return false;
    }
    return true;
  }

  React.useEffect(() => {
    setSearchMovieError('');
  }, [searchString]);

  function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      onSearch({ searchString })
    }
  }

  const handleInputChange = ({ target }) => {
    setSearchString(target.value);
    onSearchStringChange();
  }

  return (
    <section className="search-form">

      <form action="src/components/App#" className="search-form__form" noValidate onSubmit={handleSubmit}>
        <div className="search-form__search-field">
          <div className="search-form__icon" style = {{ backgroundImage: `url(${searchFormIcon})`}}></div>

          <input
            type="text"
            id="movie"
            name="movie"
            className="search-form__input"
            required
            placeholder="Фильм"
            value={searchString}
            onChange={handleInputChange}
          />

          <button type="submit" aria-label="Найти" className="search-form__button-submit link">Найти</button>

          <span id="movie-error" className={`search-form__error ${searchMovieError && 'search-form__error_visible'}`}>
            {searchMovieError}
          </span>
        </div>
        <div className="search-form__search-filter">
          <div className="search-form__vertical-line"></div>
          <FilterCheckbox
            isFilterChecked={isSearchShortMovie}
            onFilterToggle={onFilterToggle}
          />
          <p className="search-form__search-filter-text">Короткометражки</p>
        </div>

      </form>

      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
