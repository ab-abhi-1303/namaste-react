import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;
