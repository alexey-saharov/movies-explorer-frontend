import './Register.css';
import '../Link/Link.css';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../FormValidator/FormValidator';

function Register({ onRegister }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    resetForm();
  }

  return (
    <>
      <section className="register">
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__logo-container">
            <Logo />
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
            value={values.name}
            onChange={handleChange}
          />
          <span id="name-error" className="register__error">{errors.name}</span>

          <p className="register__input-title">E-mail</p>
          <input
            type="text"
            id="email"
            name="email"
            className={`register__input ${errors.email && ' register__input_error'}`}
            required
            placeholder="Почта"
            value={values.email}
            onChange={handleChange}
          />
          <span id="name-error" className="register__error">{errors.email}</span>

          <p className="register__input-title">Пароль</p>
          <input
            type="text"
            id="password"
            name="password"
            className={`register__input ${errors.password && ' register__input_error'}`}
            required
            placeholder=""
            value={values.password}
            onChange={handleChange}
          />
          <span id="name-error" className="register__error">{errors.password}</span>

          <button
            type="submit"
            aria-label="Зарегистрироваться"
            disabled={!isValid}
            className={`register__button ${isValid && 'link register__button_active'}`}
          >
            Зарегистрироваться
          </button>
          <p className="register__registered-text">
            Уже зарегистрированы? <a href="/signin" className="register__registered-text-link link">Войти</a>
          </p>

        </form>
      </section>
    </>
  );
}

export default Register;
