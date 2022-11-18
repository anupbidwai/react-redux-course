import { useEffect, useState } from "react";

const useUserStatus = (userId) => {
  const [isLogedIn, setIslogedIn] = useState();
  useEffect(() => {
    if (userId === 10) {
      setIslogedIn(true);
    } else {
      setIslogedIn(false);
    }
  }, [userId]);
  return isLogedIn;
};
export default useUserStatus;
