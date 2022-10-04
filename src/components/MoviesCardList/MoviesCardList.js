import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (

    <section className="moviesCardList">
      <ul className="moviesCardList__items">
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
