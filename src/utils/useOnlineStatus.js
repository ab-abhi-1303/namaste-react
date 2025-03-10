import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    return () => {
      window.removeEventListener("online", window);
      window.removeEventListener("offline", window);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
