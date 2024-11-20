import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className="user-Card">
      <h1>Count ={count}</h1>
      <h1>Count2 ={count2}</h1>
      <h2>Name {props.name}</h2>
      <h3>Location : Una </h3>
      <h4>Contact: @nihalSandhu</h4>
    </div>
  );
};
export default User;
