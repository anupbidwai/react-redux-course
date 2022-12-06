import { useEffect, useState } from "react";

const useUserStatus = (userId) => {
  const [isLogedIn, setIslogedIn] = useState();
  useEffect(() => {
    if (userId === 'tiger') {
      setIslogedIn(true);
    } else {
      setIslogedIn(false);
    }
  }, [userId]);
  return [isLogedIn, userId];
};
export default useUserStatus;
