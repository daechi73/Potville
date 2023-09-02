import { Link } from "react-router-dom";

import "../styles/Header.css";
const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="header-name">Javui</div>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop" onClick={props.dataFetchSwitch}>
              Shop
            </Link>
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
