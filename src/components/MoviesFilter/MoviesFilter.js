import { SHORT_FILM_DURATION } from '../../utils/constants';

export function getFilteredMovies({ movies, str, shortMovies }) {
  return movies.filter(item =>
    (item.nameRU.toLowerCase().includes(str.toLowerCase())) &&
    ((shortMovies) || (!shortMovies && (item.duration > SHORT_FILM_DURATION)))
  );
}
