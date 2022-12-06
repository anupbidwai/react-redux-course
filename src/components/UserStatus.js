import { useState } from "react";
import UseUserStatus from "../hooks/CustomHooks";

const defaultUserData = {
  department: "RAW",
  DOJ: '15-08-1947'
};

const UserStatus = (props) => {
  const [user, setUser] = useState(defaultUserData);
  const [isLoggedIn, userId] = UseUserStatus('tiger');

  const handleClick = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        age: 33,
      };
    });
  };

  return (
    <>
      <h1>useState tutorial</h1>
      {Object.keys(user).map((key) => (
        <p key={key}>{`${key.toUpperCase()} => ${user[key]}`}</p>
      ))}
      {isLoggedIn === true ? <h1>user with id #{userId} logged in</h1> : <h1>Unauthorized user</h1>}
      <button onClick={handleClick}>add age</button>
    </>
  );
};

export default UserStatus;
