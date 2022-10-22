import './Navigation.css';
import '../Link/Link.css';
import Account from '../Account/Account';

export default function Navigation({ isNavMenuVisible, onClose, onLinkClick }) {

  return (
    <section className={`navigation ${isNavMenuVisible && 'navigation_active'}`} onClick={onClose}>

      <button
        type="button"
        aria-label="закрыть"
        className="navigation__button-close link"
        onClick={onClose}
      ></button>
      <nav className={`navigation__menu ${isNavMenuVisible && 'navigation__menu_active'}`} onClick={(e)=>{e.stopPropagation ()}}>
        <ul className="navigation__items">

          <li className="navigation__item link">
            <a
              href='/'
              className="navigation__link"
              onClick={e => {
                onLinkClick(e, '/');
                onClose();
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
                onClose();
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
                onClose();
              }}
            >
              Сохранённые фильмы
            </a>
          </li>
        </ul>

        <Account onClick={e => {
          onLinkClick(e, '/profile');
          onClose();
        }} />
      </nav>
    </section>
  );
}
