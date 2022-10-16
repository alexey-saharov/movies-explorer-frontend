import './Logo.css';
import '../Link/Link.css';
import logo from "../../images/header-logo.svg";
import { useNavigate } from 'react-router-dom';

function Logo() {
  const history = useNavigate();

  const handleCLick = (e) => {
    e.preventDefault();
    history('/');
  }

  return (
    <a href="/"
       aria-label="Логотип Movies-explorer"
       className="logo link"
       onClick={handleCLick}
       style = {{ backgroundImage: `url(${logo})`}}
    >
    </a>
  );
}

export default Logo;
