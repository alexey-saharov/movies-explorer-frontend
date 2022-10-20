import { useEffect } from "react";
import './Login.css';
import '../Link/Link.css';
import Logo from "../Logo/Logo";
import { useFormWithValidation } from '../FormValidator/FormValidator';

export default function Login({ onLogin, loginError, onLinkClick }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
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
            value={values.email}
            onChange={handleChange}
          />
          <span id="email-error" className="login__input-error">{errors.email}</span>

          <p className="login__input-title">Пароль</p>
          <input
            type="text"
            id="password"
            name="password"
            className={`login__input ${errors.name && ' login__input_error'}`}
            required
            placeholder=""
            value={values.password}
            onChange={handleChange}
          />
          <span id="password-error" className="login__input-error">{errors.password}</span>

          {/*todo информацию об ошибках показывать в InfoToolTipPopup*/}
          <p className="login__error">{loginError}</p>

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
