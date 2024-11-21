import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact">
              Contact US
            </Link>
          </li>
          <li>Cart</li>
          <li>onlineStatus :{onlinestatus ? "✅" : "🔴"}</li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setbtnName("logOut") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>{" "}
      </div>
    </div>
  );
};

export default Header;
