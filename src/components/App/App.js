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

  const handleRegister = ({ name, email, password}) => {
    return MainApi.register(name, email, password)
      .then((res) => {
        // if (res.error) {
        //   throw new Error(res.error);
        // } else {
        //   return res;
        // }
      })
      .then(() => {
        //  пользователь сразу авторизуется
        history('/movies');
      })
      .catch((err) => {
        // handleRegError();
        // console.log(err.message);
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
         <Register onRegister={handleRegister} />
        } />

        <Route exact path="/signin" element={
          <Login />
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
