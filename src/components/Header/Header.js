import './Header.css';
import logo from '../../images/header-logo.svg';
import menu_icon from '../../images/header-menu-icon.svg';
import account_icon from '../../images/header-account-icon.svg';

function Header({ parent }) {
  const typeMain = (parent === 'Main');

  return (
    <section className={`header ${typeMain && 'header_main'}`}>

      <div className="header__items">
        <a href="src/components/App#"
           aria-label="Логотип Movies-explorer"
           className="header__logo header__link"
           style = {{ backgroundImage: `url(${logo})`}}
        ></a>

        {(typeMain)
        ?
          <nav className="header__menu-main">
            <a href="src/components/App#" className="header__menu-main-item header__link">Регистрация</a>
            <a href="src/components/App#"
               className="header__menu-main-item header__menu-main-item_button header__link"
            >
              Войти
            </a>
          </nav>
        :
          <>
            <nav className="header__menu-common">
              <div className="header__menu-common-items">
                <a href="src/components/App#"
                  className="header__menu-common-item header__link"
                >
                  Фильмы
                </a>
                <a href="src/components/App#"
                  className="header__menu-common-item header__link"
                >
                  Сохранённые фильмы
                </a>
              </div>
              <div className="header__menu-common-account header__link">
                <a href="" className="header__menu-common-account-text">Аккаунт</a>
                <a href="src/components/App#"
                   aria-label="Аккаунт"
                   className="header__menu-common-account-icon header__link"
                   style = {{ backgroundImage: `url(${account_icon})`}}
                ></a>
              </div>

            </nav>

            <a href="src/components/App#"
               aria-label="Иконка меню"
               className="header__menu-common-icon header__link"
               style = {{ backgroundImage: `url(${menu_icon})`}}
            ></a>
          </>
        }
      </div>

    </section>
  );
}

export default Header;
