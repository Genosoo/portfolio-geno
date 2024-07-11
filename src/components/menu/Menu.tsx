import "./Menu.css"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsColumnsGap } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";

import { Button, Tooltip } from "antd";

export default function Menu() {
  return (
    <div className="menuContainer">
        <div className="menuBox">
            <Tooltip title="Home" placement="top">
                <a href="#home">
                <Button icon={<IoHomeOutline />} />
                </a>
            </Tooltip>

            <Tooltip title="About" placement="top">
                <a href="#about">
                    <Button icon={<MdOutlinePersonPin />} />
                </a>
            </Tooltip>

            <Tooltip title="Project" placement="top">
                <a href="#project">
                    <Button icon={<BsColumnsGap />} />
                </a>
            </Tooltip>

            <Tooltip title="Contact" placement="top">
                <a href="#contact">
                    <Button icon={<TiContacts />} />
                </a>
            </Tooltip>
           
            
        </div>
    </div>
  )
}
