import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic bundling
// LAzy Loading
// on demand loading
// dynmic import

const Grocery = lazy(() => {
  return import("./components/Grocery");
});
const About = lazy(() => {
  return import("./components/About");
});
const Applayout = () => {
  // authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    // authentication make api call and send username and password
    const data = {
      name: "nihal sandhu",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />

          {/** if my path is / then over here we should have body if path is about thne about component oer here and if /contact then contact is ther */}
          <Outlet />
          <Footer />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Anbout page </h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
