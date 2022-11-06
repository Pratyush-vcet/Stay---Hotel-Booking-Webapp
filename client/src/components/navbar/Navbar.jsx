import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleLogout = () => {
		localStorage.removeItem(`user`);
		window.location = "/"
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><h2>STAY</h2></span>
        </Link>
        {/* {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to = "/login"><button className="navButton">Login</button></Link>
          </div>
        )} */}
        <div className="items">
        <ul>
          <li>Flights + Hotel  </li>
          <li>Hotel + Homes  </li>
          <li>Flights</li>
          <li>Coupans and Deals</li>
        </ul>
        </div>
        {user ? <button className="navButton" onClick={handleLogout}>Logout</button> : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to = "/login"><button className="navButton-login">Login</button></Link>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;
