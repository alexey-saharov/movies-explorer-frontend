import { useState } from "react";
import './Login.css';
import '../Link/Link.css';
import Logo from "../Logo/Logo";

function Login() {
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('');

  return (
    <>
      <section className="login">
        <form action="" className="login__form">
          <div className="login__logo-container">
            <Logo />
          </div>
          <h2 className="login__title">Рады видеть!</h2>

          <p className="login__input-title">E-mail</p>
          <input
            type="text"
            id="email"
            name="email"
            className="login__input"
            required
            placeholder="Почта"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            readOnly
          />

          <p className="login__input-title">Пароль</p>
          <input
            type="text"
            id="email"
            name="email"
            className="login__input"
            required
            placeholder=""
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            readOnly
          />

          <span id="name-error" className="login__error">Что-то пошло не так...</span>

          <button className="login__button link">Войти</button>
          <p className="login__registered-text">
            Ещё не зарегистрированы? <a href="/signup" className="login__registered-text-link link">Регистрация</a>
          </p>

        </form>
      </section>
    </>
  );
}

export default Login;
