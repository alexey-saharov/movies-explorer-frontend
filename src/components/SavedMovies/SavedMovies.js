import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import {useContext, useState} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({ onNavMenuClick }) {

  // const currentUser = useContext(CurrentUserContext);

  const [movies, setMovies] = useState([]);

  const handleSearchMovie = () => {};

  return (
    <>
      <Header onNavMenuClick={onNavMenuClick} />
      <main>
        <SearchForm onSearchMovie={handleSearchMovie} />
        <Preloader isVisible={false} />
        <MoviesCardList parent={'SavedMovies'} movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
