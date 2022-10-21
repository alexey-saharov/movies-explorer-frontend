import { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as MainApi from '../../utils/MainApi';
import { getFilteredMovies } from '../MoviesFilter/MoviesFilter';

export default function SavedMovies({ filteredSavedMovies, setFilteredSavedMovies, onDislike }) {

  const [stringSavedMovies, setStringSavedMovies] = useState('');
  const [isShortSavedMovies, setShortSavedMovies] = useState(true);
  const [isNothingFoundActive, setNothingFoundActive] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);

  useEffect(() => {
    const filteredSavedMoviesLS = JSON.parse(localStorage.getItem('filteredSavedMovies'));
    (filteredSavedMoviesLS && filteredSavedMoviesLS.length > 0) && setFilteredSavedMovies(filteredSavedMoviesLS);

    const stringSavedMoviesLS = localStorage.getItem('stringSavedMovies');
    stringSavedMoviesLS && setStringSavedMovies(stringSavedMoviesLS);

    const isShortSavedMoviesLS = JSON.parse(localStorage.getItem('isShortSavedMovies'));
    (isShortSavedMoviesLS !== null) && setShortSavedMovies(isShortSavedMoviesLS);

    const sm = JSON.parse(localStorage.getItem('savedMovies'));

    (sm)
      ? ((stringSavedMoviesLS) && (isShortSavedMoviesLS))
        ? setFilteredSavedMovies(
            getFilteredMovies({
              movies: sm,
              str: stringSavedMoviesLS,
              shortMovies: isShortSavedMoviesLS,
            })
          )
        : setFilteredSavedMovies(sm)
      : MainApi.getMovies()
        .then(items => {
          setFilteredSavedMovies(items);
          localStorage.setItem('savedMovies', JSON.stringify(items));
        })
        .catch(() => {});
  }, []);

  const handleSearch = async () => {
    setPreloaderActive(true);

    const sm = JSON.parse(localStorage.getItem('savedMovies'));
    const fm = getFilteredMovies({
      movies: sm,
      str: stringSavedMovies,
      shortMovies: isShortSavedMovies,
    });

    localStorage.setItem('filteredSavedMovies', JSON.stringify(fm));
    localStorage.setItem('stringSavedMovies', stringSavedMovies);
    localStorage.setItem('isShortSavedMovies', JSON.stringify(isShortSavedMovies));

    await setFilteredSavedMovies(fm);

    setPreloaderActive(false);
  };

  const handleStringChange = () => {
    setNothingFoundActive(false);
  }

  const handleShortMovieToggle = () => {
    setShortSavedMovies(!isShortSavedMovies);
  }



  return (
    <main>
      <SearchForm
        string={stringSavedMovies}
        setString={setStringSavedMovies}
        onSearch={handleSearch}
        onStringChange={handleStringChange}
        isShortMovies={isShortSavedMovies}
        onToggleShortMovies={handleShortMovieToggle}
        isTypeSavedMovies={true}
      />
      <Preloader isVisible={isPreloaderActive} />
      <MoviesCardList
        isTypeSavedMovies={true}
        movies={filteredSavedMovies}
        isNothingFoundActive={isNothingFoundActive}
        onToggleLike={onDislike}
      />
    </main>
  );
}
