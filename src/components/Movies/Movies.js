import './Movies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {

  const handleSearchMovie = ({ movie }) => {
    // поиск фильма в api
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
      <Footer />
    </>
  );
}

export default Movies;
