import './Header.css';
import '../Link/Link.css';
import menuIcon from '../../images/header-menu-icon.svg';
import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';

function Header({ parent, onNavMenuClick }) {
  const history = useNavigate();
  const typeMain = (parent === 'Main');

  const handleRegisterCLick = (e) => {
    e.preventDefault();
    history('/signup');
  }

  const handleLoginCLick = (e) => {
    e.preventDefault();
    history('/signin');
  }

  const handleMoviesCLick = (e) => {
    e.preventDefault();
    history('/movies');
  }

  const handleSavedMoviesCLick = (e) => {
    e.preventDefault();
    history('/saved-movies');
  }

  const handleAccountCLick = (e) => {
    e.preventDefault();
    history('/profile');
  }

  return (
    <section className={`header ${typeMain && 'header_main'}`}>

      <div className="header__items">
        <Logo />

        {(typeMain)
        ?
          <nav className="header__menu-main">
            <a href="/signup" className="header__menu-main-item link" onClick={handleRegisterCLick}>
              Регистрация
            </a>
            <a
              href="/signin"
              className="header__menu-main-item header__menu-main-item_button link"
              onClick={handleLoginCLick}
            >
              Войти
            </a>
          </nav>
        :
          <>
            <nav className="header__menu-common">
              <div className="header__menu-common-items">
                <a href="/movies" className="header__menu-common-item link" onClick={handleMoviesCLick}>
                  Фильмы
                </a>
                <a href="/saved-movies" className="header__menu-common-item link" onClick={handleSavedMoviesCLick}>
                  Сохранённые фильмы
                </a>
              </div>
              <Account onClick={handleAccountCLick} />

            </nav>

            <button
              type="button"
              aria-label="Иконка меню"
              className="header__menu-common-icon link"
              style = {{ backgroundImage: `url(${menuIcon})`}}
              onClick={onNavMenuClick}
            >
            </button>
          </>
        }
      </div>

    </section>
  );
}

export default Header;
