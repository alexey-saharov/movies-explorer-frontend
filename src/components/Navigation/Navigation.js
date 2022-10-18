import './Navigation.css';
import '../Link/Link.css';
import { Account } from '../Account/Account';

export function Navigation({ isNavMenuVisible, onCLose, onLinkClick }) {

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
            <a
              href='/'
              className="navigation__link"
              onClick={e => {
                onLinkClick(e, '/');
                onCLose();
              }}
            >
              Главная
            </a>
          </li>
          <li className="navigation__item link">
            <a
              href='/movies'
              className="navigation__link"
              onClick={e => {
                onLinkClick(e, '/movies');
                onCLose();
              }}
            >
              Фильмы
            </a>
          </li>
          <li className="navigation__item link">
            <a
              href='/saved-movies'
              className="navigation__link"
              onClick={e => {
                onLinkClick(e, '/saved-movies');
                onCLose();
              }}
            >
              Сохранённые фильмы
            </a>
          </li>
        </ul>

        <Account onClick={e => {
          onLinkClick(e, '/profile');
          onCLose();
        }} />
      </nav>
    </section>
  );
}
