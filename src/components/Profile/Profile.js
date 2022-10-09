import { useState } from "react";
import Header from "../Header/Header";
import './Profile.css';
import '../Link/Link.css';

function Profile({ onNavMenuClick }) {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  return (
    <>
      <Header onNavMenuClick={onNavMenuClick} />
      <section className="profile">
        <form action="" className="profile__form">
          <h2 className="profile__title">{`Привет, ${name}!`}</h2>

          <div className="profile__input">
            <p className="profile__input-title">Имя</p>
            <input
              type="text"
              id="name"
              name="name"
              className="profile__input-field"
              minLength="2"
              maxLength="40"
              required
              placeholder="Имя"
              value={name}
              onChange={({ target }) => setName(target.value)}
              readOnly
            />
          </div>

          <div className="profile__line"></div>

          <div className="profile__input">
            <p className="profile__input-title">E-mail</p>
            <input
              type="text"
              id="email"
              name="email"
              className="profile__input-field"
              minLength="2"
              maxLength="40"
              required
              placeholder="Почта"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              readOnly
            />
          </div>

          <button type="button" className="profile__edit-button link" >Редактировать</button>
          <button className="profile__sign-out-button link" >Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
}

export default Profile;
