import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [isNavMenuVisible, setNavMenuVisible] = useState(false);

  function openNavMenu() {
    setNavMenuVisible(true);
  }

  function closeNavMenu() {
    setNavMenuVisible(false);
  }

  return (
    <div className="app">

      <Navigation
        isNavMenuVisible={isNavMenuVisible}
        onCLose={closeNavMenu}
      />

      <Routes>
        <Route exact path="/signup" element={
         <Register />
        } />

        <Route exact path="/signin" element={
          <Login />
        } />

        <Route exact path="/movies" element={
            <Movies onNavMenuClick={openNavMenu} />
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

    </div>
  );
}

export default App;
