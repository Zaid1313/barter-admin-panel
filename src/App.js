import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./screens/Home";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

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
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </div>
        </div>
    </>
  );
}

export default App;
