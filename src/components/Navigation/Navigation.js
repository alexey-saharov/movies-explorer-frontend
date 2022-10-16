import './Navigation.css';
import '../Link/Link.css';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';

function Navigation({ isNavMenuVisible, onCLose }) {
  const history = useNavigate();

  const handleAccountCLick = (e) => {
    e.preventDefault();
    history('/profile');
    onCLose();
  }

  const handleMainCLick = (e) => {
    e.preventDefault();
    history('/');
    onCLose();
  }

  const handleMoviesCLick = (e) => {
    e.preventDefault();
    history('/movies');
    onCLose();
  }

  const handleSavedMoviesCLick = (e) => {
    e.preventDefault();
    history('/saved-movies');
    onCLose();
  }

  return (
    <section className={`navigation ${isNavMenuVisible && 'navigation_active'}`}>

      <button
        type="button"
        aria-label="закрыть"
        className="navigation__button-close link"
        onClick={onCLose}
      ></button>
      <nav className={`navigation__menu ${isNavMenuVisible && 'navigation__menu_active'}`}>
        <ul className="navigation__items">

          <li className="navigation__item link">
            <a href='/' className="navigation__link" onClick={handleMainCLick}>Главная</a>
          </li>
          <li className="navigation__item link">
            <a href='/movies' className="navigation__link" onClick={handleMoviesCLick}>Фильмы</a>
          </li>
          <li className="navigation__item link">
            <a href='/saved-movies' className="navigation__link" onClick={handleSavedMoviesCLick}>Сохранённые фильмы</a>
          </li>
        </ul>

        <Account onClick={handleAccountCLick} />
      </nav>
    </section>
  );
}

export default Navigation;
