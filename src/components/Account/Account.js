import accountIcon from "../../images/header-account-icon.svg";
import './Account.css';
import '../Link/Link.css';

function Account({ onClick }) {

  return (
    <a href='/profile' aria-label="Аккаунт" className="account link" onClick={onClick}>
      <span className="account__text">Аккаунт</span>
      <div
        className="account__icon"
        style = {{ backgroundImage: `url(${accountIcon})`}}
      ></div>
    </a>
  );
}

export default Account;
