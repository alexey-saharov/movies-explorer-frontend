import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ parent, movies, isSearchResultMessageActive }) {

  const isTypeMovies =  (parent === 'Movies');
  const classNameMinHeight = (isTypeMovies)
    ? 'movies-card-list__min-height-movies'
    : 'movies-card-list__min-height-saved-movies';

  const mySavedMovie = !isTypeMovies;

  return (

    <section className={`movies-card-list ${classNameMinHeight}`}>

      <ul className={`movies-card-list__items ${(movies.length > 0) && 'movies-card-list__items_active'}`}>
        {movies.slice(0).map((movie) => (
          <li key={movie._id} className="movies-card-list__item">
            <MoviesCard
              movie={movie}
              isLiked={false}
              mySavedMovie={mySavedMovie}
            />
          </li>
        ))}
      </ul>

      <p className={`movies-card-list__nothing-found
        ${
          isTypeMovies &&
          isSearchResultMessageActive &&
          (movies.length === 0) &&
          'movies-card-list__nothing-found_active'}`
        }
      >
        Ничего не найдено
      </p>

      <button
        type="button"
        aria-label="Еще"
        className={`movies-card-list__button link
          ${isTypeMovies && (movies.length > 0) && 'movies-card-list__button_active'}`}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
