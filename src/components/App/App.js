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
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigateTo = useNavigate();

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

  const handleRegister = ({ name, email, password }) => {
    return MainApi.register(name, email, password)
      .then(res => { return res })
      .then(() => {
        //  todo пользователь сразу авторизуется
        setRegisterError('');
        navigateTo('/movies');
      })
      .catch((err) => {
        setRegisterError(err);
      });
  }

  const handleLogin = ({ email, password }) => {
    MainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          if (res.token) {
            localStorage.setItem('jwt', res.token);
            setLoggedIn(true);
          }
        } else {
          throw new Error('Что-то пошло не так!');
        }
      })
      .then(() => {
        setLoginError('');
        navigateTo('/movies');
      })
      .catch((err) => {
        setLoginError(err);
      });
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


  const addSavedMovie = (movie) => {
    movie.isLiked = true;
    const baseUrl = MOVIES_URL.slice(0, MOVIES_URL.lastIndexOf('/'));

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

    console.log(`App - addSavedMovie - movie = ${movie}`);

    MainApi.addMovie(newSavedMovie)
      .then(newSavedMovie => {
        const sm = JSON.parse(localStorage.getItem('savedMovies'));
        localStorage.setItem('savedMovies', JSON.stringify([...sm, newSavedMovie]));
      })
      .catch(err => showMessage(err));
  }

  const deleteSavedMovie = (movie) => {
    console.log(`App - deleteSavedMovie - movie = ${movie}`);
    movie.isLiked = false;
  }

  const handleToggleLike = (movie) => {
    (movie.isLiked) ? deleteSavedMovie(movie) : addSavedMovie(movie);
  }



  return (
    <div className="app">

      <Navigation
        isNavMenuVisible={isNavMenuVisible}
        onCLose={closeNavMenu}
        onLinkClick={handleLinkClick}
      />

      <Routes>
        <Route exact path="/signup" element={
         <Register onRegister={handleRegister} registerError={registerError} onLinkClick={handleLinkClick} />
        } />

        <Route exact path="/signin" element={
          <Login onLogin={handleLogin} loginError={loginError} onLinkClick={handleLinkClick} />
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
              onError={showMessage}
              onToggleLike={handleToggleLike} />
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
              onToggleLike={deleteSavedMovie}
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
