import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (

    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        <li className="movies-card-list__item"><MoviesCard /></li>
        <li className="movies-card-list__item"><MoviesCard /></li>
        <li className="movies-card-list__item"><MoviesCard /></li>
        <li className="movies-card-list__item"><MoviesCard /></li>
        <li className="movies-card-list__item"><MoviesCard /></li>
        <li className="movies-card-list__item"><MoviesCard /></li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
