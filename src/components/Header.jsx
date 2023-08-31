import { Link } from "react-router-dom";

import "../styles/Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-name">Potsville</div>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
