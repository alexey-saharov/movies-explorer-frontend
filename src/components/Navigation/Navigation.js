import './Navigation.css';
import '../Link/Link.css';
import Account from '../Account/Account';

function Navigation() {

  return (
    <section className="navigation">
      <button type="button" aria-label="закрыть" className="navigation__button-close link"></button>
      <nav className="navigation__menu navigation__menu_active">
        <ul className="navigation__items">

          <li className="navigation__item">
            <a href="/" className="navigation__link link">Главная</a>
          </li>
          <li className="navigation__item">
            <a href="/movies" className="navigation__link navigation__link_current link">Фильмы</a>
          </li>
          <li className="navigation__item">
            <a href="/saved-movies" className="navigation__link link">Сохранённые фильмы</a>
          </li>
        </ul>

        <Account />
      </nav>
    </section>
  );
}

export default Navigation;
