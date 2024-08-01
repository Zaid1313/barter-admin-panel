import React from "react";
import { FaTh } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { IoMdMegaphone } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function SideBar({ isOpen }) {
  return (
    <nav id="sidebar" className={isOpen ? "open" : "closed"}>
      <div id="barterLogo">
        <img src={"/images/sidebar/TrichromaticLogoB2 1.png"} alt="logo" />
      </div>
      <div>
        <ul className="side-list">
          <li>
            <input
              id="searchBar"
              type="text"
              placeholder="Search in menu"
              style={{ width: 178, height: 37 }}
            />
          </li>
          <li style={{}} className="d-flex align-items-center sidebar-opt">
            <NavLink to="/" activeclassname="active"><FaTh style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />DASHBOARD</NavLink>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <NavLink to="/all-brands" activeclassname="active"><MdGroups style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />BRANDS</NavLink>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <NavLink to="" activeclassname="active"><TiGroup style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />INFLUENCER</NavLink>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <NavLink activeclassname="active"><IoMdMegaphone style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />DEALS</NavLink>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <NavLink activeclassname="active"><FaShoppingCart style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />SUBSCRIPTIONS</NavLink>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <NavLink activeclassname="active"><FaUserLarge style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />ACCOUNT MANAGER</NavLink>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <NavLink activeclassname="active"><IoMdSettings style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />SETTING</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
