import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return <div className="header">
        <div className="logoContainer">
            <img className="logo" src={require("../../images/logo.png")} alt="logo" />
        </div>
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>SignIn</li>
                <li>SignUp</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;