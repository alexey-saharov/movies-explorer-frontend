import { useState } from "react";
import './Register.css';
import '../Link/Link.css';
import logo from "../../images/header-logo.svg";

function Register() {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('••••••••••••••');

  return (
    <>
      <section className="register">
        <form action="" className="register__form">
          <a href="src/components/App#"
             aria-label="Логотип Movies-explorer"
             className="header__logo link"
             style = {{ backgroundImage: `url(${logo})`}}
          ></a>
          <h2 className="register__title">Добро пожаловать!</h2>

          <p className="register__input-title">Имя</p>
          <input
            type="text"
            id="name"
            name="name"
            className="register__input"
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
            value={name}
            onChange={({ target }) => setName(target.value)}
            readOnly
          />

          <p className="register__input-title">E-mail</p>
          <input
            type="text"
            id="email"
            name="email"
            className="register__input"
            required
            placeholder="Почта"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            readOnly
          />

          <p className="register__input-title">Пароль</p>
          <input
            type="text"
            id="email"
            name="email"
            className="register__input"
            required
            placeholder=""
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            readOnly
          />

          <span id="name-error" className="register__error">Что-то пошло не так...</span>

          <button className="register__button link">Зарегистрироваться</button>
          <p className="register__registered-text">
            Уже зарегистрированы? <a href="/sign-in" className="register__registered-text-link link">Войти</a>
          </p>

        </form>
      </section>
    </>
  );
}

export default Register;
