import { SearchForm } from '../SearchForm/SearchForm';
import { Preloader } from '../Preloader/Preloader';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { useState} from 'react';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export function SavedMovies() {

  // const currentUser = useContext(CurrentUserContext);

  const [movies, setMovies] = useState([]);

  const handleSearchMovie = () => {};

  return (
    <main>
      <SearchForm onSearchMovie={handleSearchMovie} />
      <Preloader isVisible={false} />
      <MoviesCardList parent={'SavedMovies'} movies={movies} />
    </main>
  );
}
