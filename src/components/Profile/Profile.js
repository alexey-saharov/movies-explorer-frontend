import { useState } from "react";
import Header from "../Header/Header";
import './Profile.css';
import '../Link/Link.css';

function Profile() {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setName(e.target.value);
  }

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${name}!`}</h2>

        <div className="profile__input profile__input_margin-bottom_short">
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
            onChange={handleChangeName}
            readOnly
          />
        </div>

        <div className="profile__line"></div>

        <div className="profile__input profile__input_margin-bottom_long">
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
            onChange={handleChangeEmail}
            readOnly
          />
        </div>

        <button className="profile__edit-button link" >Редактировать</button>
        <button className="profile__sign-out-button link" >Выйти из аккаунта</button>

      </section>
    </>
  );
}

export default Profile;
