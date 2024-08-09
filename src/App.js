import "./App.css";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./screens/Home";
import Brands from "./screens/Brands.js";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import BrandInfo from "./screens/BrandInfo.js";
import CampaignInfo from "./screens/CampaignInfo.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={`sidebarPages ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <SideBar isOpen={isOpen} />
          <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-brands" element={<Brands />} />
                <Route path="/all-brands/brand-info/:brandName" element={<BrandInfo/>} />
                <Route path="/all-brands/campaign-info/:campaignTitle" element={<CampaignInfo/>} />
              </Routes>
          </div>
          {/* <footer>
          <div className="footer">
            <div className="footer-text">
              &copy; 2024 Bartergram. All Rights Reserved.
            </div>
          </div>
          </footer> */}
        </div>
    </>
  );
}

export default App;
