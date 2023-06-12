import './Logo.css';
import '../Link/Link.css';
import logo from "../../images/header-logo.svg";

export default function Logo({ onLinkClick }) {

  return (
    <a
      href="/"
      aria-label="Логотип Movies-explorer"
      className="logo link"
      onClick={e => {onLinkClick(e, '/')}}
      style = {{ backgroundImage: `url(${logo})`}}
    >
    </a>
  );
}
