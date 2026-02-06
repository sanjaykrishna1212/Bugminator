import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "./Navbar.css"
import { FaPowerOff } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-container">
        <div className="logo-container"> <code className="logo-text">Bugminator</code></div>
        <div className="nav-wrapper">
          <ul className="list-tab">
            <li><NavLink to="home" >Home</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
          </ul>
        </div>
        <div className="logout-profile" onClick={() => navigate("/", { replace: true })}><FaPowerOff className="logout-btn" /></div>
      </div>
     
    </>

  )
}

export default Navbar
