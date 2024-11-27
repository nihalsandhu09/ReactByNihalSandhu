import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const [isMenuOpen, setIsMenu] = useState(false);
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center w-4/6 m-auto">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <button
        className=" text-lg lg:hidden"
        onClick={() => {
          setIsMenu(!isMenuOpen);
        }}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:gap-6 gap-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
      >
        <ul className="flex gap-6 opacity-70">
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
