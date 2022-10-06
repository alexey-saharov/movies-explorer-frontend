import accountIcon from "../../images/header-account-icon.svg";
import './Account.css';
import '../Link/Link.css';

function Account({ parent }) {

  return (
    <div className="account link">
      <a href="" className="account__text">Аккаунт</a>
      <a href="src/components/App#"
         aria-label="Аккаунт"
         className="account__icon link"
         style = {{ backgroundImage: `url(${accountIcon})`}}
      ></a>
    </div>
  );
}

export default Account;
