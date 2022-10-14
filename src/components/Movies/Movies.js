import {useEffect, useState} from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ onNavMenuClick, onError }) {

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isSearchShortMovie, setSearchShortMovie] = useState(true);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);
  const [isSearchResultMessageActive, setSearchResultMessageActive] = useState(false);

  useEffect(() => {
    const searchedMoviesLS = JSON.parse(localStorage.getItem('searchedMovies'));
    if (searchedMoviesLS && searchedMoviesLS.length > 0) {
      setSearchedMovies(searchedMoviesLS);
    }
    const visibleMoviesCount = JSON.parse(localStorage.getItem('visibleMoviesCount'));
    if (visibleMoviesCount > 0) {
      setVisibleMovies(searchedMoviesLS.slice(0, visibleMoviesCount));
    }
    const searchStringMovieLS = localStorage.getItem('searchStringMovie');
    if (searchStringMovieLS) {
      setSearchString(searchStringMovieLS);
    }
    const searchShortMovieLS = JSON.parse(localStorage.getItem('searchShortMovie'));
    if (searchShortMovieLS !== null) {
      setSearchShortMovie(searchShortMovieLS);
    }
  }, []);

  const handleFilterCheckBoxToggle = () => {
    setSearchShortMovie(!isSearchShortMovie);
  }

  const getWindowWidth = () => {
    return window.innerWidth;
  }

  const handleSearchMovie = ({ searchString }) => {
    setPreloaderActive(true);
    setVisibleMovies([]);
    moviesApi.getMovies()
      .then(items => {
        const searchedMovies = items.filter(item => item.nameRU.toLowerCase().includes(searchString.toLowerCase()));
        setSearchedMovies(searchedMovies);
        localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
        localStorage.setItem('searchStringMovie', searchString);
        localStorage.setItem('searchShortMovie', JSON.stringify(isSearchShortMovie));

        setPreloaderActive(false);
        if (searchedMovies.length === 0) {
          setSearchResultMessageActive(true);
        }

        const windowWidth = getWindowWidth();
        const initialCountMovies = (windowWidth >= 1280)
          ? 12
          : (windowWidth >= 768 && windowWidth < 1280)
            ? 8
            : 5;

        setVisibleMovies(searchedMovies.slice(0, initialCountMovies));
        localStorage.setItem('visibleMoviesCount', JSON.stringify(initialCountMovies));
      })
      .catch(err => {
        setPreloaderActive(false);
        onError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз');
      });
  };

  useEffect(() => {
    setMoreButtonVisible(visibleMovies.length < searchedMovies.length);
  }, [visibleMovies]);

  function handleAddMovies() {
    const windowWidth = getWindowWidth();
    const initialCount = visibleMovies.length;

    const additionalCount = (windowWidth >= 1280)
      ? (initialCount % 4 !== 0)
        ? 4 - (initialCount % 4)
        : 4
      : 2;

    setVisibleMovies(searchedMovies.slice(0, initialCount + additionalCount));
    localStorage.setItem('visibleMoviesCount', JSON.stringify(initialCount + additionalCount));
  }

  const handleSearchStringChange = () => {
    setSearchResultMessageActive(false);
  }

  return (
    <>
      <Header onNavMenuClick={onNavMenuClick} />
      <main>
        <SearchForm
          searchString={searchString}
          setSearchString={setSearchString}
          onSearch={handleSearchMovie}
          onSearchStringChange={handleSearchStringChange}
          isSearchShortMovie={isSearchShortMovie}
          onFilterToggle={handleFilterCheckBoxToggle}
        />
        <Preloader isActive={isPreloaderActive} />
        <MoviesCardList
          parent={'Movies'}
          movies={visibleMovies}
          isSearchResultMessageActive={isSearchResultMessageActive}
          isMoreButtonVisible={isMoreButtonVisible}
          onAddMovies={handleAddMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
