import React from "react";
import foodFireLogo from "../../../../public/images/foodFireLogo.png";

// Title component for display logo 
const Title = () => (
  <a href="/">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [login, setLogin] = React.useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button className="login" onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
        </ul>
     
      </div>
    </div>
  );
};

export default Header;