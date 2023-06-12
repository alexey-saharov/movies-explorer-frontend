import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchFormIcon from '../../images/searchform-icon.svg';

export default function SearchForm({ string, setString, onSearch, onStringChange, isShortMovies,
                                     onToggleShortMovies, isTypeSavedMovies }) {
  const [isInputsDisabled, setInputsDisabled] = useState(false);
  const [searchMovieError, setSearchMovieError] = useState('');

  const handleValidation = () => {
    if (!string) {
      setSearchMovieError('Нужно ввести ключевое слово');
      return false;
    }
    return true;
  }

  React.useEffect(() => {
    setSearchMovieError('');
  }, [string]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setInputsDisabled(true);
    (isTypeSavedMovies || handleValidation()) && await onSearch();
    setInputsDisabled(false);
  }

  const handleInputChange = ({ target }) => {
    setString(target.value);
    onStringChange();
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
            disabled={isInputsDisabled}
            value={string}
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
            isFilterChecked={isShortMovies}
            onFilterToggle={onToggleShortMovies}
          />
          <p className="search-form__search-filter-text">Короткометражки</p>
        </div>

      </form>

      <div className="search-form__line"></div>
    </section>
  );
}
