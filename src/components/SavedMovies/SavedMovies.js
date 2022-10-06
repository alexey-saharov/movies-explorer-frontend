import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {

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
      <MoviesCardList parent={'SavedMovies'} />
      <Footer />
    </>
  );
}

export default SavedMovies;
