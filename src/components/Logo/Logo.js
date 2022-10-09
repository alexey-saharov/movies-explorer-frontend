import './Logo.css';
import '../Link/Link.css';
import logo from "../../images/header-logo.svg";

function Logo() {
  return (
    <a href="/"
       aria-label="Логотип Movies-explorer"
       className="logo link"
       style = {{ backgroundImage: `url(${logo})`}}
    >
    </a>
  );
}

export default Logo;
