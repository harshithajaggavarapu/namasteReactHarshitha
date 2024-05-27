import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between border border-black border-solid bg-gray-100">
      <div className="logoContainer">
        <img
          className="w-[100px] h-[100px]"
          src={require("../../images/logo.png")}
          alt="logo"
        />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online status : {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">SignUp</li>
          <li className="px-3">Cart</li>
          <li className="px-3">
            <button
              className="login"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
