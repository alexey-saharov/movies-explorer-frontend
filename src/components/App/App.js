import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import * as MainApi from "../../utils/MainApi";

function App() {
  const [isNavMenuVisible, setNavMenuVisible] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorPopupMessage, setErrorPopupMessage] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

//  const [loggedIn, setLoggedIn] = useState(false);

  function openNavMenu() {
    setNavMenuVisible(true);
  }

  function closeNavMenu() {
    setNavMenuVisible(false);
  }

  function showError( message ) {
    setErrorPopupMessage(message);
    setErrorPopupOpen(true);
  }

  function closeErrorPopup() {
    setErrorPopupOpen(false);
  }

  const handleRegister = ({ name, email, password }) => {
    return MainApi.register(name, email, password)
      .then(res => { return res })
      .then(() => {
        //  todo пользователь сразу авторизуется
        setRegisterError('');
        history('/movies');
      })
      .catch((err) => {
        setRegisterError(err);
      });
  }

  const handleLogin = ({ email, password }) => {
    return MainApi.authorize(email, password)
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
        history('/movies');
      })
      .catch((err) => {
        setLoginError(err);
      });
  }

  return (
    <div className="app">

      <Navigation
        isNavMenuVisible={isNavMenuVisible}
        onCLose={closeNavMenu}
      />

      <Routes>
        <Route exact path="/signup" element={
         <Register onRegister={handleRegister} registerError={registerError} />
        } />

        <Route exact path="/signin" element={
          <Login onLogin={handleLogin} loginError={loginError} />
        } />

        <Route exact path="/movies" element={
          <Movies onNavMenuClick={openNavMenu} onError={showError} />
        } />

        <Route exact path="/saved-movies" element={
          <SavedMovies onNavMenuClick={openNavMenu} />
        } />

        <Route exact path="/profile" element={
          <Profile onNavMenuClick={openNavMenu} />
        } />

        <Route exact path="/" element={
          <Main />
        } />

        <Route path="*" element={
          <PageNotFound />
        } />
      </Routes>

      <ErrorPopup isOpen={isErrorPopupOpen} message={errorPopupMessage} onClose={closeErrorPopup} />

    </div>
  );
}

export default App;
