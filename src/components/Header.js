import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus(); // import useOnlineStatus hook

  const { loggedInUser } = useContext(UserContext);
  console.log("logged in user", loggedInUser);

  const cartItems = useSelector((store) => {
    console.log("cartItems", store.cart.items);
    return store.cart.items;
  });

  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-64" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "Online" : "Offline"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
