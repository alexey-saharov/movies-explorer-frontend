import { useEffect, useState } from "react";
import './Login.css';
import '../Link/Link.css';
import Logo from "../Logo/Logo";
import { useFormWithValidation } from '../FormValidator/FormValidator';

export default function Login({ onLogin, onLinkClick }) {
  const [isInputsDisabled, setInputsDisabled] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setInputsDisabled(true);
    await onLogin(values);
    setInputsDisabled(false);
  }

  return (
    <>
      <section className="login">
        <form action="" className="login__form" onSubmit={handleSubmit}>
          <div className="login__logo-container">
            <Logo onLinkClick={onLinkClick} />
          </div>
          <h2 className="login__title">Рады видеть!</h2>

          <p className="login__input-title">E-mail</p>
          <input
            type="text"
            id="email"
            name="email"
            className={`login__input ${errors.name && ' login__input_error'}`}
            required
            placeholder="Почта"
            disabled={isInputsDisabled}
            value={values.email}
            onChange={handleChange}
          />
          <span id="email-error" className="login__input-error">{errors.email}</span>

          <p className="login__input-title">Пароль</p>
          <input
            type="password"
            id="password"
            name="password"
            className={`login__input ${errors.name && ' login__input_error'}`}
            required
            placeholder=""
            disabled={isInputsDisabled}
            value={values.password}
            onChange={handleChange}
          />
          <span id="password-error" className="login__input-error">{errors.password}</span>

          <button
            type="submit"
            aria-label="Авторизоваться"
            disabled={!isValid}
            className={`login__button ${isValid && 'link login__button_active'}`}
          >
            Войти
          </button>
          <p className="login__registered-text">
            Ещё не зарегистрированы?
            <a
              href="/signup"
              className="login__registered-text-link link"
              onClick={e => {
                onLinkClick(e, '/signup');
              }}
            >
              Регистрация
            </a>
          </p>

        </form>
      </section>
    </>
  );
}
