import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ onNavMenuClick }) {

  const handleSearchMovie = () => {};

  return (
    <>
      <Header onNavMenuClick={onNavMenuClick} />
      <SearchForm onSearchMovie={handleSearchMovie} />
      <Preloader isVisible={false} />
      <MoviesCardList parent={'Movies'}/>
      <Footer />
    </>
  );
}

export default Movies;
