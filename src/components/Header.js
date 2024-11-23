import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center w-5/6 m-auto">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-6">
          <li className="text-lg font-medium">
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li className="text-lg  font-medium">
            <Link className="nav-item" to="/about">
              About Us
            </Link>
          </li>
          <li className="text-lg font-medium">
            <Link className="nav-item" to="/contact">
              Contact US
            </Link>
          </li>
          <li className="text-lg font-medium">Cart</li>{" "}
          <li className="text-lg font-medium">
            <Link className="nav-item" to="/grocery">
              Groccery{" "}
            </Link>
          </li>{" "}
          <li className="text-lg font-medium">{onlinestatus ? "✅" : "🔴"}</li>
          <button
            className="login text-lg font-medium"
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
