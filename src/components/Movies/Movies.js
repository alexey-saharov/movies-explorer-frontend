import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMore from '../MoviesMore/MoviesMore';
import Footer from '../Footer/Footer';

function Movies() {

  const handleSearchMovie = ({ movie }) => {
    // api.get()
    //   .then()
    //   .catch();
  };

  return (
    <>
      <Header />
      <SearchForm onSearchMovie={handleSearchMovie} />
      {/*<Preloader />*/}
      <MoviesCardList />
      <MoviesMore />
      <Footer />
    </>
  );
}

export default Movies;
