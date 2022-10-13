import { useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ onNavMenuClick }) {
  const [movies, setMovies] = useState([]);
  const [isFilterChecked, onFilterCheckBoxChange] = useState(true);
  const [isPreloaderActive, setPreloaderActive] = useState(false);
  const [isSearchResultMessageActive, setSearchResultMessageActive] = useState(false);

  const handleFilterCheckBoxToggle = () => {
    onFilterCheckBoxChange(!isFilterChecked);
  }

  const handleSearchMovie = ({ searchString }) => {
    setPreloaderActive(true);
    moviesApi.getMovies()
      .then(items => {
        const searchedMovies = items.filter(item => item.nameRU.toLowerCase().includes(searchString.toLowerCase()));
        setMovies(searchedMovies);
        localStorage.setItem('searchStringMovie', searchString);
        localStorage.setItem('searchShortMovie', JSON.stringify(isFilterChecked));
        localStorage.setItem('foundMovies', JSON.stringify(searchedMovies));

        setPreloaderActive(false);
        setSearchResultMessageActive(true);
      })
      .catch(err => {
        console.log(err);             // убрать console.log
        setPreloaderActive(false);
        setSearchResultMessageActive(true);
      });
  };

  const handleSearchStringChange = () => {
    setSearchResultMessageActive(false);
  }

  return (
    <>
      <Header onNavMenuClick={onNavMenuClick} />
      <main>
        <SearchForm
          onSearch={handleSearchMovie}
          onSearchStringChange={handleSearchStringChange}
          isFilterChecked={isFilterChecked}
          onFilterToggle={handleFilterCheckBoxToggle}
        />
        <Preloader isActive={isPreloaderActive} />
        <MoviesCardList
          parent={'Movies'}
          movies={movies}
          isSearchResultMessageActive={isSearchResultMessageActive}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
