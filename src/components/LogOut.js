import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../utils/authSlice";
const LogOut = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <h1> {user?.userName}</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default LogOut;
