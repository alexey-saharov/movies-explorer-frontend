import { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as MainApi from '../../utils/MainApi';
import { getFilteredMovies } from '../MoviesFilter/MoviesFilter';

export default function SavedMovies({ filteredSavedMovies, setFilteredSavedMovies, onDislike, onError }) {

  const [stringSavedMovies, setStringSavedMovies] = useState('');
  const [isShortSavedMovies, setShortSavedMovies] = useState(true);
  const [isNothingFoundActive, setNothingFoundActive] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);

  useEffect(() => {
    const fsm = JSON.parse(localStorage.getItem('filteredSavedMovies'));
    (fsm && fsm.length > 0) && setFilteredSavedMovies(fsm);

    const ssm = localStorage.getItem('stringSavedMovies');
    ssm && setStringSavedMovies(ssm);

    const issm = JSON.parse(localStorage.getItem('isShortSavedMovies'));
    (issm !== null) && setShortSavedMovies(issm);

    const sm = JSON.parse(localStorage.getItem('savedMovies'));

    (sm)
      ? ((ssm) && (issm))
        ? setFilteredSavedMovies(
            getFilteredMovies({
              movies: sm,
              str: ssm,
              shortMovies: issm,
            })
          )
        : setFilteredSavedMovies(sm)
      : MainApi.getMovies()
        .then(items => {
          setFilteredSavedMovies(items);
          localStorage.setItem('savedMovies', JSON.stringify(items));
        })
        .catch(() => {
          onError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз');
        });
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
