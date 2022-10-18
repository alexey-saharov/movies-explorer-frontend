import './Header.css';
import '../Link/Link.css';
import menuIcon from '../../images/header-menu-icon.svg';
import Logo from '../Logo/Logo';
import Account from '../Account/Account';

function Header({ parent, onNavMenuClick, onLinkClick }) {
  const typeMain = (parent === 'Main');

  return (
    <section className={`header ${typeMain && 'header_main'}`}>

      <div className="header__items">
        <Logo onLinkClick={onLinkClick} />

        {(typeMain)
        ?
          <nav className="header__menu-main">
            <a
              href="/signup"
              className="header__menu-main-item link"
              onClick={e => {onLinkClick(e, '/signup')}}
            >
              Регистрация
            </a>
            <a
              href="/signin"
              className="header__menu-main-item header__menu-main-item_button link"
              onClick={e => {onLinkClick(e, '/signin')}}
            >
              Войти
            </a>
          </nav>
        :
          <>
            <nav className="header__menu-common">
              <div className="header__menu-common-items">
                <a
                  href="/movies"
                  className="header__menu-common-item link"
                  onClick={e => {onLinkClick(e, '/movies')}}
                >
                  Фильмы
                </a>
                <a
                  href="/saved-movies"
                  className="header__menu-common-item link"
                  onClick={e => {onLinkClick(e, '/saved-movies')}}
                >
                  Сохранённые фильмы
                </a>
              </div>
              <Account onClick={e => {onLinkClick(e, '/profile')}} />

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
