import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import RequireAuth from '../RequireAuth/RequireAuth';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {MOVIES_URL} from "../../utils/constants";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isNavMenuVisible, setNavMenuVisible] = useState(false);

  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorPopupMessage, setErrorPopupMessage] = useState('');
  const navigateTo = useNavigate();

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    navigateTo(url);
  }

  const openNavMenu = () => {
    setNavMenuVisible(true);
  }

  const closeNavMenu = () => {
    setNavMenuVisible(false);
  }

  const showMessage = (message) => {
   (typeof(message) !== "string") && (message = 'Что-то пошло не так!');
    setErrorPopupMessage(message);
    setErrorPopupOpen(true);
  }

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  }

  const auth = async () => {
    const content = await MainApi.getUser()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch(() => {
        return false;
      })
    return content;
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth();
    }
  }, [loggedIn]);

  const handleRegister = ({ name, email, password })=> {
    return MainApi.register(name, email, password)
      .then(res => { return res })
      .then(() => {
        // setRegisterError('');
        handleLogin({ email, password });
      })
      .catch(err => showMessage(err));
  }

  const handleLogin = ({ email, password }) => {
    MainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          if (res.token) {
            localStorage.setItem('jwt', res.token);
            setLoggedIn(true);
          }
        }
      })
      .then(() => {
        // setLoginError('');
        navigateTo('/movies');
      })
      .catch(err => showMessage(err));
  }

  const handleSignOut = () => {
    localStorage.clear();
    navigateTo('/');
    setLoggedIn(false);
  }

  const handleUpdateUser = ({ name, email }) => {
    MainApi.setUserInfo({ name, email })
      .then(res => {
        setCurrentUser(res);
        showMessage('Успешно обновлено');
      })
      .catch(err => showMessage(err));
  };

  const handleLike = (id) => {
    console.log(`App - handleLike - start`);

    const fm = JSON.parse(localStorage.getItem('filteredMovies'));
    const i = fm.findIndex(item => item.id === id);
    if (i > -1) {
      const baseUrl = MOVIES_URL.slice(0, MOVIES_URL.lastIndexOf('/'));
      const movie = fm[i];
      const newSavedMovie = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: baseUrl + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail:  baseUrl + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      };

      console.log(`App - handleLike - id = ${id}`);


      MainApi.addMovie(newSavedMovie)
        .then(newSavedMovie => {
          let sm = JSON.parse(localStorage.getItem('savedMovies'));
          console.log(`App - handleLike - sm.length = ${sm.length}`);
          sm = [...sm, newSavedMovie];
          console.log(`App - handleLike - sm = ${JSON.stringify(sm)}`);
          sm.sort((a,b) => a.movieId - b.movieId);
          console.log(`App - handleLike - sm = ${JSON.stringify(sm)}`);

          console.log(`App - handleLike - sm.length = ${sm.length}`);
          localStorage.setItem('savedMovies', JSON.stringify(sm));
          setFilteredSavedMovies(sm);

          fm[i].isLiked = true;
          localStorage.setItem('filteredMovies', JSON.stringify(fm));
          setFilteredMovies(fm);

          const vmc = JSON.parse(localStorage.getItem('visibleMoviesCount'));
          setVisibleMovies(fm.slice(0, vmc));
        })
        .catch(err => showMessage(err));
    }
  }

  const handleDislike = (id) => {
    console.log(`App - handleDislike - start`);
    const sm = JSON.parse(localStorage.getItem('savedMovies'));
    let i = sm.findIndex(item => item.movieId === id);
    if (i > -1) {
      console.log(`App - handleDislike - id = ${id}`);

      MainApi.deleteMovie({ _id: sm[i]._id })
        .then(() => {
          sm.splice(i, 1);
          console.log(`App - handleDislike - sm.length = ${sm.length}`);
          localStorage.setItem('savedMovies', JSON.stringify(sm));
          setFilteredSavedMovies(sm);

          const fm = JSON.parse(localStorage.getItem('filteredMovies'));
          i = fm.findIndex(item => item.id === id);
          (i > -1) && (fm[i].isLiked = false);
          localStorage.setItem('filteredMovies', JSON.stringify(fm));
          setFilteredMovies(fm);

          const vmc = JSON.parse(localStorage.getItem('visibleMoviesCount'));
          setVisibleMovies(fm.slice(0, vmc));
        })
        .catch(err => {
          console.log('App - handleDislike');
          console.log(err);
          // showMessage(err);
        });
    }
  }

  const handleToggleLike = (id) => {
    const sm = JSON.parse(localStorage.getItem('savedMovies'));
    if (sm) {
      let i = sm.findIndex(item => item.movieId === id);
      (i > -1) ? handleDislike(id) : handleLike(id);
    } else {
      handleLike(id);
    }
  }


  return (
    <div className="app">

      <Navigation
        isNavMenuVisible={isNavMenuVisible}
        onClose={closeNavMenu}
        onLinkClick={handleLinkClick}
      />

      <Routes>
        <Route exact path="/signup" element={
         <Register onRegister={handleRegister} onLinkClick={handleLinkClick} />
        } />

        <Route exact path="/signin" element={
          <Login onLogin={handleLogin} onLinkClick={handleLinkClick} />
        } />

        <Route exact path="/movies" element={
          <RequireAuth loggedIn={loggedIn} redirectTo="/signin">
            <Header
              isTypeMain={false}
              loggedIn={loggedIn}
              onNavMenuClick={openNavMenu}
              onLinkClick={handleLinkClick}
            />
            <Movies
              filteredMovies={filteredMovies}
              setFilteredMovies={setFilteredMovies}
              visibleMovies={visibleMovies}
              setVisibleMovies={setVisibleMovies}
              onError={showMessage}
              onToggleLike={handleToggleLike}
            />
            <Footer />
          </RequireAuth>
        } />

        <Route exact path="/saved-movies" element={
          <RequireAuth loggedIn={loggedIn} redirectTo="/signin">
            <Header
              isTypeMain={false}
              loggedIn={loggedIn}
              onNavMenuClick={openNavMenu}
              onLinkClick={handleLinkClick}
            />
            <SavedMovies
              filteredSavedMovies={filteredSavedMovies}
              setFilteredSavedMovies={setFilteredSavedMovies}
              onDislike={handleDislike}
              onError={showMessage}
            />
            <Footer />
          </RequireAuth>
        } />

        <Route exact path="/profile" element={
          <RequireAuth loggedIn={loggedIn} redirectTo="/signin">
            <CurrentUserContext.Provider value={currentUser}>
              <Header
                isTypeMain={false}
                loggedIn={loggedIn}
                onNavMenuClick={openNavMenu}
                onLinkClick={handleLinkClick}
              />
              <Profile onSignOut={handleSignOut} onUpdateUser={handleUpdateUser}  />
            </CurrentUserContext.Provider>
          </RequireAuth>
        } />

        <Route exact path="/" element={
          <>
            <Header
              isTypeMain={true}
              loggedIn={loggedIn}
              onNavMenuClick={openNavMenu}
              onLinkClick={handleLinkClick}
            />
            <Main />
            <Footer />
          </>
        } />

        <Route path="*" element={
          <PageNotFound onLinkClick={handleLinkClick} />
        } />
      </Routes>

      <ErrorPopup isOpen={isErrorPopupOpen} message={errorPopupMessage} onClose={closeErrorPopup} />

    </div>
  );
}
