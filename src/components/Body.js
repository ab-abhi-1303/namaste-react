import { useState, useEffect, useContext } from "react";
// import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {setUserInfo, loggedInUser} = useContext(UserContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const res = await resp.json();
    setListOfRestaurants(res);
    setFilteredRestaurants(res);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="body">
        <h1>You're currently offline. Please check your internet connection.</h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Search
              setSearchText(searchText);
              const searchedList = listOfRestaurants.filter((res) => {
                return res.title.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(searchedList);
            }}
          >
            search
          </button>
          <input
            type="text"
            className="border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          
          />
        </div >
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) => res.rating.rate > 4);
              setFilteredRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant, index) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
