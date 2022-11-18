import { useState, useEffect } from "react";
import UseUserStatus from "../Hooks/CustomHooks";

const defaultUserData = {
  department: "FBI",
};

const UserStatus = (props) => {
  const [user, setUser] = useState(defaultUserData);
  const isLoggedIn = UseUserStatus(10);

  const handleClick = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        age: 33,
      };
    });
  };

  useEffect(() => {
    console.log("mounted");
  }, [isLoggedIn]);

  return (
    <>
      <h1>useState tutorial</h1>
      {Object.keys(user).map((key) => (
        <p key={key}>{`${key}:${user[key]}`}</p>
      ))}
      {isLoggedIn === true ? <h1>user logged in</h1> : <h1>user lgged off</h1>}
      <button onClick={handleClick}>add age</button>
    </>
  );
};

export default UserStatus;
