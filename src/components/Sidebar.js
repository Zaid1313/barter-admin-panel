import React from "react";
import { FaTh } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { IoMdMegaphone } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SideBar({ isOpen }) {
  return (
    <div id="sidebar" className={isOpen ? "open" : "closed"}>
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
            <Link to="/"><FaTh style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />DASHBOARD</Link>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <Link to="/all-brands"><MdGroups style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />BRANDS</Link>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <Link><TiGroup style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />INFLUENCER</Link>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <Link><IoMdMegaphone style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />DEALS</Link>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <Link><FaShoppingCart style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />SUBSCRIPTIONS</Link>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <Link><FaUserLarge style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />ACCOUNT MANAGER</Link>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <Link><IoMdSettings style={{ width: 16, height: 16, margin: "0px 15px 3px 0px"}} />SETTING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
