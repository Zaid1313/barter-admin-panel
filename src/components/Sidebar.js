import React from "react";
import { FaTh } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { IoMdMegaphone } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

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
          <li className="d-flex align-items-center sidebar-opt">
            <FaTh style={{ width: 16, height: 16 }} />
            <a>DASHBOARD</a>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <MdGroups style={{ width: 16, height: 16 }} />
            <a>BRANDS</a>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <TiGroup style={{ width: 16, height: 16 }} />
            <a>INFLUENCER</a>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <IoMdMegaphone style={{ width: 16, height: 16 }} />
            <a>DEALS</a>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <FaShoppingCart style={{ width: 16, height: 16 }} />
            <a>SUBSCRIPTIONS</a>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <FaUserLarge style={{ width: 16, height: 16 }} />
            <a>ACCOUNT MANAGER</a>
          </li>
          <li className="d-flex align-items-center sidebar-opt">
            <IoMdSettings style={{ width: 16, height: 16 }} />
            <a>SETTING</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
