import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ parent }) {

  const isTypeMovies =  (parent === 'Movies');
  const classNameMinHeight = (isTypeMovies)
    ? 'movies-card-list__min-height-movies'
    : 'movies-card-list__min-height-saved-movies';

  const mySavedMovie = !isTypeMovies;

  return (

    <section className={`movies-card-list ${classNameMinHeight}`}>
      <ul className="movies-card-list__items">
        <li className="movies-card-list__item"><MoviesCard isLiked={true} mySavedMovie={mySavedMovie} /></li>
        <li className="movies-card-list__item"><MoviesCard isLiked={false} mySavedMovie={mySavedMovie} /></li>
        <li className="movies-card-list__item"><MoviesCard isLiked={true} mySavedMovie={mySavedMovie} /></li>
        <li className="movies-card-list__item"><MoviesCard isLiked={true} mySavedMovie={mySavedMovie} /></li>
        <li className="movies-card-list__item"><MoviesCard isLiked={false} mySavedMovie={mySavedMovie} /></li>
        <li className="movies-card-list__item"><MoviesCard isLiked={false} mySavedMovie={mySavedMovie} /></li>
      </ul>

      {/*{isTypeMovies &&*/}
      {/*  <p className="movies-card-list__nothing-found">*/}
      {/*    По вашему запросу ничего не найдено*/}
      {/*  </p>*/}
      {/*}*/}

      {isTypeMovies &&
        <button type="button" aria-label="Еще" className="movies-card-list__button link">
          Ещё
        </button>
      }
    </section>
  );
}

export default MoviesCardList;
