import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const dispatch = useDispatch();

  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const handleAddItem = (item) => {
    dispatch(addItem(resInfo));
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Title Name: {resInfo.title}</h1>
      <h2>
        Description: <p>{resInfo.description}</p>
      </h2>
      <p>Category: {resInfo.category}</p>
      <button className="w-full py-2 bg-blue-500 text-white rounded-lg" onClick={handleAddItem}>
        Add Item
      </button>
    </div>
  );
};

export default RestaurantMenu;
