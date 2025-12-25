import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [modeName, setModeName] = useState("Light");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-right-container">
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="theme">
          <button
            className="theme-btn"
            onClick={() => {
              modeName === "Light" ? setModeName("Dark") : setModeName("Light");
            }}
          >
            {modeName}
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
