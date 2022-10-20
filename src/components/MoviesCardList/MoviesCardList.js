import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ isTypeSavedMovies, movies, isNothingFoundActive, isMoreButtonVisible,
                                         onAddMovies, onToggleLike }) {

  const classNameMinHeight = (isTypeSavedMovies)
    ? 'movies-card-list__min-height-saved-movies'
    : 'movies-card-list__min-height-movies';

  return (

    <section className={`movies-card-list ${classNameMinHeight}`}>

      <ul className={`movies-card-list__items ${(movies.length > 0) && 'movies-card-list__items_active'}`}>
        {movies.slice(0).map((movie) => (
          <li key={movie.id} className="movies-card-list__item">
            <MoviesCard
              movie={movie}
              isTypeSavedMovies={isTypeSavedMovies}
              onToggleLike={onToggleLike}
            />
          </li>
        ))}
      </ul>

      <p className={`movies-card-list__nothing-found
        ${
          isNothingFoundActive &&
          (movies.length === 0) &&
          'movies-card-list__nothing-found_active'}`
        }
      >
        Ничего не найдено
      </p>

      <button
        type="button"
        aria-label="Еще"
        className={`movies-card-list__button link ${isMoreButtonVisible && 'movies-card-list__button_active'}`}
        onClick={onAddMovies}
      >
        Ещё
      </button>
    </section>
  );
}
