import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getFilteredMovies } from '../MoviesFilter/MoviesFilter';
import * as MainApi from "../../utils/MainApi";

export default function Movies({ filteredMovies, setFilteredMovies, visibleMovies, setVisibleMovies, onError, onToggleLike }) {

  const [stringMovies, setStringMovies] = useState('');
  const [isShortMovies, setShortMovies] = useState(true);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(false);
  const [isPreloaderActive, setPreloaderActive] = useState(false);
  const [isNothingFoundActive, setNothingFoundActive] = useState(false);

  useEffect(() => {
    const fm = JSON.parse(localStorage.getItem('filteredMovies'));
    (fm && fm.length > 0) && setFilteredMovies(fm);

    const vmc = JSON.parse(localStorage.getItem('visibleMoviesCount'));
    (vmc > 0) && setVisibleMovies(filteredMovies.slice(0, vmc));

    (fm) && (fm.length > 0) && (vmc) &&
      setVisibleMovies(fm.slice(0, vmc));

    const strmov = localStorage.getItem('stringMovies');
    strmov && setStringMovies(strmov);

    const ism = JSON.parse(localStorage.getItem('isShortMovies'));
    (ism !== null) && setShortMovies(ism);
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

    let m = JSON.parse(localStorage.getItem('movies'));
    let sm = JSON.parse(localStorage.getItem('savedMovies'));

    ((!m) || (!sm)) &&
    await Promise.all([
      moviesApi.getMovies(),
      MainApi.getMovies()
    ])
      .then(([moviesApiRes, MainApiRes]) => {
        m = moviesApiRes;
        localStorage.setItem('movies', JSON.stringify(m));
        sm = MainApiRes;
        localStorage.setItem('savedMovies', JSON.stringify(sm));
      })
      .catch(() => {
        setPreloaderActive(false);
        onError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз');
      });

    const fm = getFilteredMovies({
      movies: m,
      str: stringMovies,
      shortMovies: isShortMovies,
    });

    fm.map(item_fm => {
      item_fm.isLiked = !!sm.find(item_sm => item_fm.id === item_sm.movieId);
      return item_fm;
    });

    localStorage.setItem('filteredMovies', JSON.stringify(fm));
    localStorage.setItem('stringMovies', stringMovies);
    localStorage.setItem('isShortMovies', JSON.stringify(isShortMovies));

    setPreloaderActive(false);
    (!fm || (fm.length === 0)) &&
    setNothingFoundActive(true);

    const windowWidth = getWindowWidth();
    const initialCountMovies = (windowWidth >= 1280)
      ? 12
      : (windowWidth >= 768 && windowWidth < 1280)
        ? 8
        : 5;

    setVisibleMovies(fm.slice(0, initialCountMovies));
    setFilteredMovies(fm);
    localStorage.setItem('visibleMoviesCount', JSON.stringify(initialCountMovies));
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
        isTypeSavedMovies={false}
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
