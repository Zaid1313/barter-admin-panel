import React from "react";
import { Table } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

export default function Brands() {
  return (
    <div className="brandsPage">
      <div className="welcomDiv">
        <h4 className="h4Style">Welcome To - Bartergram</h4>
        <button className="POCbutton">
          Assign Brand POC
          <FaArrowRight />
        </button>
      </div>
      <h4 className="h4Style" style={{ marginTop: "20px" }}>
        All Brands
      </h4>
      <div className="hotSectionTableHome">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone</th>
              <th>Subscription</th>
              <th>No of Campaigns Done</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lakme</td>
              <td>Lakme@gmail.com</td>
              <td>919140453894</td>
              <td>Platinum</td>
              <td>10</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
