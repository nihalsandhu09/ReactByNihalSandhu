import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const [isMenuOpen, setIsMenu] = useState(false);
  const onlinestatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  // console.log(loggedInUser);

  // subscibing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center w-full lg:w-4/6 m-auto ">
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
      <div>
        <ul className="flex gap-6 opacity-2">
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
          <li className="text-lg font-medium cursor-pointer">
            <Link to="/cart"> Cart ({cartItems.length})</Link>
          </li>{" "}
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
          <li className="text-lg font-medium">{loggedInUser}</li>
        </ul>{" "}
      </div>
    </div>
  );
};

export default Header;
