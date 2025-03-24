import React from "react";
import { Link,useNavigate } from "react-router-dom";
import foodFireLogo from "../../../../public/images/foodFireLogo.png";
import { FaCartArrowDown } from "react-icons/fa";


// Header component for header section: Logo, Nav Items
const Header = () => {
  const [login, setLogin] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={foodFireLogo} alt="Food Fire" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-links">
            <FaCartArrowDown />
          </li>

          {login ? (
            <button className="login" onClick={() => setLogin(false)}>
              Logout
            </button>
          ) : (
            <button className="login" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;