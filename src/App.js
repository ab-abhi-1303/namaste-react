import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/About";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  //auth
  useEffect(() => {
    //from api call
    const data = {
      name: "Akshay",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          {/* Only header can access context */}
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutClass /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:id", element: <RestaurantMenu /> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
