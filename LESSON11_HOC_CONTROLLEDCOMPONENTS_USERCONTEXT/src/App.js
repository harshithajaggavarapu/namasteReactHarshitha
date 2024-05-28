import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider } from "react-router-dom";
import ErrorRoute from "./components/ErrorRoute";
import { Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import Skeleton from "./components/Skeleton";
import userContext from "./utils/userContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppRoot = () => {
  const [userName, setUserName] = useState("dummy");
  return (
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
