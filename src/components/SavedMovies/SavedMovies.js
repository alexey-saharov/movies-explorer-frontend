import { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as MainApi from '../../utils/MainApi';
import { getFilteredMovies } from '../MoviesFilter/MoviesFilter';

export default function SavedMovies({ onToggleLike }) {

  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
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

    // const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    // (!savedMovies)
    //   ?
    MainApi.getMovies()
      .then(items => {
        setFilteredSavedMovies(items);
        localStorage.setItem('savedMovies', JSON.stringify(items));
      });
      // : setFilteredSavedMovies(savedMovies);
  }, []);

  // useEffect(() => {
  //   handleSearch();
  // }, [savedMovies]);



  const handleSearch = async () => {
    setPreloaderActive(true);

    // const savedMovies = JSON.parse(localStorage.getItem('filteredSavedMovies'));
    // (!savedMovies) &&
    //   await MainApi.getMovies()
    //     .then(items => localStorage.setItem('savedMovies', JSON.stringify(items)));

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
      />
      <Preloader isVisible={isPreloaderActive} />
      <MoviesCardList
        isTypeSavedMovies={true}
        movies={filteredSavedMovies}
        isNothingFoundActive={isNothingFoundActive}
        onToggleLike={onToggleLike}
      />
    </main>
  );
}
