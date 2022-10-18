import './Account.css';
import '../Link/Link.css';
import accountIcon from "../../images/header-account-icon.svg";

export function Account({ onClick }) {
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
