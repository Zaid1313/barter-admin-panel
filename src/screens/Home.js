import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="homeDiv">
      <div className="welcomDiv">
        <h4 className="homeH1">Welcome To - Bartergram</h4>
        <button className="POCbutton">
          Assign Brand POC
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
}
