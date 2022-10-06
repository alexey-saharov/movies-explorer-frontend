import './Navigation.css';
import '../Link/Link.css';
import Account from '../Account/Account';

function Navigation() {

  return (
    <>
    <section className="navigation">
      <button type="button" aria-label="закрыть" className="navigation__button-close link"></button>
      <nav className="navigation__menu navigation__menu_active">
        <ul className="navigation__items">

          <li className="navigation__item">
            <a href="" className="navigation__link link">Главная</a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link navigation__link_current link">Фильмы</a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link link">Сохранённые фильмы</a>
          </li>
        </ul>

        <Account />
      </nav>






      {/*  <input*/}
        {/*    type="text"*/}
        {/*    id="name"*/}
        {/*    name="name"*/}
        {/*    className="register__input"*/}
        {/*    minLength="2"*/}
        {/*    maxLength="40"*/}
        {/*    required*/}
        {/*    placeholder="Имя"*/}
        {/*    value={name}*/}
        {/*    onChange={({ target }) => setName(target.value)}*/}
        {/*    readOnly*/}
        {/*  />*/}

        {/*  <p className="register__input-title">E-mail</p>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    id="email"*/}
        {/*    name="email"*/}
        {/*    className="register__input"*/}
        {/*    required*/}
        {/*    placeholder="Почта"*/}
        {/*    value={email}*/}
        {/*    onChange={({ target }) => setEmail(target.value)}*/}
        {/*    readOnly*/}
        {/*  />*/}

        {/*  <p className="register__input-title">Пароль</p>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    id="email"*/}
        {/*    name="email"*/}
        {/*    className="register__input"*/}
        {/*    required*/}
        {/*    placeholder=""*/}
        {/*    value={password}*/}
        {/*    onChange={({ target }) => setPassword(target.value)}*/}
        {/*    readOnly*/}
        {/*  />*/}

        {/*  <span id="name-error" className="register__error">Что-то пошло не так...</span>*/}

        {/*  <button className="register__button link">Зарегистрироваться</button>*/}
        {/*  <p className="register__registered-text">*/}
        {/*    Уже зарегистрированы? <a href="/sign-in" className="register__registered-text-link link">Войти</a>*/}
        {/*  </p>*/}

        {/*</form>*/}
      </section>
      {/*  <p className="register__input-title">Имя</p>*/}
      {/*     className="header__logo link"*/}
      {/*     style = {{ backgroundImage: `url(${logo})`}}*/}
      {/*  ></a>*/}
      {/*  <h2 className="register__title">Добро пожаловать!</h2>*/}
      {/*<form action="" className="register__form">*/}
      {/*  <a href="src/components/App#"*/}
      {/*     aria-label="Логотип Movies-explorer"*/}
    </>
  );
}

export default Navigation;
