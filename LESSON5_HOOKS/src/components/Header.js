const Header = () => {
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
            </ul>
        </div>
    </div>
}

export default Header;