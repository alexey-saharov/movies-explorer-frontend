import {useEffect, useState} from "react";
import './Register.css';
import '../Link/Link.css';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../FormValidator/FormValidator';

export default function Register({ onRegister, onLinkClick }) {
  const [isInputsDisabled, setInputsDisabled] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setInputsDisabled(true);
    await onRegister(values);
    setInputsDisabled(false);
  }

  return (
    <>
      <section className="register">
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__logo-container">
            <Logo onLinkClick={onLinkClick} />
          </div>
          <h2 className="register__title">Добро пожаловать!</h2>

          <p className="register__input-title">Имя</p>
          <input
            type="text"
            id="name"
            name="name"
            className={`register__input ${errors.name && ' register__input_error'}`}
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
            disabled={isInputsDisabled}
            value={values.name}
            onChange={handleChange}
          />
          <span id="name-error" className="register__input-error">{errors.name}</span>

          <p className="register__input-title">E-mail</p>
          <input
            type="text"
            id="email"
            name="email"
            className={`register__input ${errors.email && ' register__input_invalid'}`}
            required
            placeholder="Почта"
            disabled={isInputsDisabled}
            value={values.email}
            onChange={handleChange}
          />
          <span id="name-error" className="register__input-error">{errors.email}</span>

          <p className="register__input-title">Пароль</p>
          <input
            type="password"
            id="password"
            name="password"
            className={`register__input ${errors.password && ' register__input_invalid'}`}
            required
            placeholder=""
            disabled={isInputsDisabled}
            value={values.password}
            onChange={handleChange}
          />
          <span id="name-error" className="register__input-error">{errors.password}</span>

          <button
            type="submit"
            aria-label="Зарегистрироваться"
            disabled={!isValid}
            className={`register__button ${isValid && 'link register__button_active'}`}
          >
            Зарегистрироваться
          </button>
          <p className="register__registered-text">
            Уже зарегистрированы?
            <a
              href="/signin"
              className="register__registered-text-link link"
              onClick={e => {
                onLinkClick(e, '/signin');
              }}
            >
              Войти
            </a>
          </p>

        </form>
      </section>
    </>
  );
}
