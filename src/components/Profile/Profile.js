import {useContext, useEffect, useState} from "react";
import './Profile.css';
import '../Link/Link.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../FormValidator/FormValidator';

export function Profile({ onNavMenuClick, onSignOut, onUpdateUser, profileError, onLinkClick }) {
  const [isChanged, setIsChanged] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [])

  useEffect(() => {
    if (values.name && values.email && (values.name !== currentUser.name || values.email !== currentUser.email)) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  },[values])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsChanged(false);
    onUpdateUser(values);
  }

  return (
    <>
      {/*<Header isTypeMain={false} onNavMenuClick={onNavMenuClick} onLinkClick={onLinkClick} />*/}
      <section className="profile">
        <form action="" className="profile__form" onSubmit={handleSubmit}>
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>

          <div className="profile__input">
            <p className="profile__input-title">Имя</p>
            <input
              type="text"
              id="name"
              name="name"
              className="profile__input-field"
              required
              placeholder="Имя"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <span id="name-error" className="profile__input-error">{errors.name}</span>

          <div className="profile__line"></div>

          <div className="profile__input">
            <p className="profile__input-title">E-mail</p>
            <input
              type="text"
              id="email"
              name="email"
              className="profile__input-field"
              required
              placeholder="Почта"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <span id="email-error" className="profile__input-error">{errors.email}</span>

          {/*todo информацию об ошибках показывать в InfoToolTipPopup*/}
          <p className="profile__error">{profileError}</p>

          <button
            type="submit"
            disabled={!(isChanged && isValid)}
            className={`profile__edit-button ${isChanged && isValid && 'link profile__edit-button_active'}`}
          >
            Редактировать
          </button>
          <button className="profile__sign-out-button link" onClick={onSignOut} >Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
}
