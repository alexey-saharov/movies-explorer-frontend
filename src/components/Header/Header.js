import './Header.css';
import '../Link/Link.css';
import logo from '../../images/header-logo.svg';
import menuIcon from '../../images/header-menu-icon.svg';
import accountIcon from '../../images/header-account-icon.svg';

function Header({ parent }) {
  const typeMain = (parent === 'Main');

  return (
    <section className={`header ${typeMain && 'header_main'}`}>

      <div className="header__items">
        <a href="src/components/App#"
           aria-label="Логотип Movies-explorer"
           className="header__logo link"
           style = {{ backgroundImage: `url(${logo})`}}
        ></a>

        {(typeMain)
        ?
          <nav className="header__menu-main">
            <a href="src/components/App#" className="header__menu-main-item link">Регистрация</a>
            <a href="src/components/App#"
               className="header__menu-main-item header__menu-main-item_button link"
            >
              Войти
            </a>
          </nav>
        :
          <>
            <nav className="header__menu-common">
              <div className="header__menu-common-items">
                <a href="src/components/App#"
                  className="header__menu-common-item link"
                >
                  Фильмы
                </a>
                <a href="src/components/App#"
                  className="header__menu-common-item link"
                >
                  Сохранённые фильмы
                </a>
              </div>
              <div className="header__menu-common-account link">
                <a href="" className="header__menu-common-account-text">Аккаунт</a>
                <a href="src/components/App#"
                   aria-label="Аккаунт"
                   className="header__menu-common-account-icon link"
                   style = {{ backgroundImage: `url(${accountIcon})`}}
                ></a>
              </div>

            </nav>

            <a href="src/components/App#"
               aria-label="Иконка меню"
               className="header__menu-common-icon link"
               style = {{ backgroundImage: `url(${menuIcon})`}}
            ></a>
          </>
        }
      </div>

    </section>
  );
}

export default Header;
