import React from "react";
import { FaBars } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  return (
      <nav id="navdiv">
        <FaBars onClick={toggleSidebar} style={{cursor: "pointer"}} id="hamburger"/>
        <FaBell id="bellIcon" style={{cursor: "pointer"}}/>
        <img
          src={"/images/sidebar/TrichromaticLogoB2 1.png"}
          alt="logo"
        />
      </nav>
  );
}

