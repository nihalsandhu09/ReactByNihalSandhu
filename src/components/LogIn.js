import { useState } from "react";
import { logIn } from "../utils/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const LogIn = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogIn = () => {
    if (userName) {
      dispatch(logIn(userName));
      console.log("button clicked");
    }
  };

  return (
    <div className="w-full h-screen">
      {!isLoggedIn ? (
        <div className="w-2/12 m-auto border grid justify-center items-center h-1/2 bg-gray-400 rounded-md py-11">
          <label className="mt-5">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button
            className="border bg-black text-lg text-white px-2 rounded-lg  mt-4"
            onClick={handleLogIn}
          >
            Log In{" "}
          </button>
        </div>
      ) : (
        <div className="w-2/4 m-auto">
          <h2 className="font-bold text-lg">Welcome , {userName}</h2>
          <p className="font-medium">
            {" "}
            Time For Order Delecious Food ,{" "}
            <span className="border bg-blue-400 text-white font-bold px-2 py-1 rounded-md ">
              {" "}
              <Link to="/"> Find Restaurant </Link>
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default LogIn;
