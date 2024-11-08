import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  console.log(" Header render");
  useEffect(() => {
    console.log("useEffect");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        {" "}
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
