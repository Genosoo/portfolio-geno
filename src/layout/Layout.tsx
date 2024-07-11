import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Menu from "../components/menu/Menu"
import "./Layout.css"

export default function Layout() {
  return (
    <div className="mainContainer">
      <Navbar />  
      <Outlet />
      <Menu />
    </div>
  )
}
