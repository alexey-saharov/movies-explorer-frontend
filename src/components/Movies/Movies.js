import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getFilteredMovies } from '../MoviesFilter/MoviesFilter';

export default function Movies({ movies, setMovies, onError, onToggleLike }) {

  const [stringMovies, setStringMovies] = useState('');
  const [isShortMovies, setShortMovies] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);
  const [isNothingFoundActive, setNothingFoundActive] = useState(false);

  // const [searchedMovies, setSearchedMovies] = useState([]);
  // const [searchString, setSearchString] = useState('');
  // const [isSearchShortMovie, setSearchShortMovie] = useState(true);

  useEffect(() => {

    const filteredMoviesLS = JSON.parse(localStorage.getItem('filteredMovies'));
    (filteredMoviesLS && filteredMoviesLS.length > 0) && setFilteredMovies(filteredMoviesLS);

    const visibleMoviesCountLS = JSON.parse(localStorage.getItem('visibleMoviesCount'));
    (visibleMoviesCountLS > 0) && setVisibleMovies(filteredMovies.slice(0, visibleMoviesCountLS));

    const stringMoviesLS = localStorage.getItem('stringMovies');
    stringMoviesLS && setStringMovies(stringMoviesLS);

    const isShortMoviesLS = JSON.parse(localStorage.getItem('isShortMovies'));
    (isShortMoviesLS !== null) && setShortMovies(isShortMoviesLS);
  }, []);

  const handleShortMovieToggle = () => {
    setShortMovies(!isShortMovies);
  }

  const getWindowWidth = () => {
    return window.innerWidth;
  }

  const handleSearch = async () => {
    setPreloaderActive(true);
    setVisibleMovies([]);

    // (!movies || (movies.length === 0)) &&
      // исправить на запрос к двум Api
      // сборка массива movies с добавленным полем isLiked
      // затем setMovies
      moviesApi.getMovies()
        .then(items => {
          setMovies(items);

          // с этого места работать с полученным массивом movies
          setFilteredMovies(
            getFilteredMovies({
              movies: items,
              str: stringMovies,
              shortMovies: isShortMovies,
            })
          );

          // console.log(`${filteredMovies.length}`);
          // console.log(stringMovies);



          localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
          localStorage.setItem('stringMovies', stringMovies);
          localStorage.setItem('isShortMovies', JSON.stringify(isShortMovies));


          setPreloaderActive(false);
          (!filteredMovies || (filteredMovies.length === 0)) &&
            setNothingFoundActive(true);

          const windowWidth = getWindowWidth();
          const initialCountMovies = (windowWidth >= 1280)
            ? 12
            : (windowWidth >= 768 && windowWidth < 1280)
              ? 8
              : 5;

          setVisibleMovies(filteredMovies.slice(0, initialCountMovies));
          localStorage.setItem('visibleMoviesCount', JSON.stringify(initialCountMovies));
        })
        .catch(err => {
          setPreloaderActive(false);
          onError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз');
        });

  };

  useEffect(() => {
    setMoreButtonVisible(visibleMovies.length < filteredMovies.length);
  }, [visibleMovies]);

  const handleAddMovies = () => {
    const windowWidth = getWindowWidth();
    const initialCount = visibleMovies.length;

    const additionalCount = (windowWidth >= 1280)
      ? (initialCount % 4 !== 0)
        ? 4 - (initialCount % 4)
        : 4
      : 2;

    setVisibleMovies(filteredMovies.slice(0, initialCount + additionalCount));
    localStorage.setItem('visibleMoviesCount', JSON.stringify(initialCount + additionalCount));
  }

  const handleStringChange = () => {
    setNothingFoundActive(false);
  }

  return (
    <main>
      <SearchForm
        string={stringMovies}
        setString={setStringMovies}
        onSearch={handleSearch}
        onStringChange={handleStringChange}
        isShortMovies={isShortMovies}
        onToggleShortMovies={handleShortMovieToggle}
      />
      <Preloader isActive={isPreloaderActive} />
      <MoviesCardList
        isTypeSavedMovies={false}
        movies={visibleMovies}
        isNothingFoundActive={isNothingFoundActive}
        isMoreButtonVisible={isMoreButtonVisible}
        onAddMovies={handleAddMovies}
        onToggleLike={onToggleLike}
      />
    </main>
  );
}
