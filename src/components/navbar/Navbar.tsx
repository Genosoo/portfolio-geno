import "./Navbar.css"
// import logo from "../../assets/logo.png"
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";
import { Button } from "antd";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="navbarContainer">
       {/* <img src={logo} alt="logo" /> */}
       <h3 className="navLogo">PORTFOLIO</h3>
       <Button 
        onClick={toggleDarkMode} 
        icon={darkMode ? <AiFillSun /> : <FaMoon />} 
        className="btnDarkmode"
        />
    </div>
  )
}
