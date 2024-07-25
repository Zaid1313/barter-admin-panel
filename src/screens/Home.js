import React from "react";
import ReportCarousel from "../components/ReportCarousel";
import { FaArrowRight } from "react-icons/fa6";
import { Table } from 'react-bootstrap';
import NewBriefHomeCarousel from "../components/NewBriefHome";

export default function Home() {
  return (
    <div className="homeDiv">
      <div className="welcomDiv">
        <h4 className="h4Style">Welcome To - Bartergram</h4>
        <button className="POCbutton">
          Assign Brand POC
          <FaArrowRight />
        </button>
      </div>
      <div>
        <div className="totalB-I-D">
          <div className="item">
            <div className="itemHeader">
              <span>Brands</span>
              <span className="count">40</span>
            </div>
            <p className="itemDescription ">Total Brands</p>
          </div>
          <div className="item">
            <div className="itemHeader">
              <span>Influencers</span>
              <span className="count">230</span>
            </div>
            <p className="itemDescription ">Total Influencers</p>
          </div>
          <div className="item">
            <div className="itemHeader">
              <span>Deals</span>
              <span className="count">40</span>
            </div>
            <p className="itemDescription ">Ongoing Deals</p>
          </div>
        </div>
        <div className="" style={{marginTop: '30px'}}>
          <h4 className="h4Style">Brand POC to be Assigned </h4>
          <div className="reportDiv">
            <NewBriefHomeCarousel/>
          </div>
        </div>
        <div className="hotSection" style={{}}>
          <div className=" d-flex flex-row justify-content-between">
            <div className="">
              <button className="homeBtn">
                Hot Deal <FaArrowRight style={{ color: "#A180DB" }} />
              </button>
              <div style={{
                width: '450px',
                height: '235px'
              }} className="hotSectionTableHome">
                <Table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Brand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Kurkure
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div>
              <button className="homeBtn">
                Bartergram Recommendation <FaArrowRight style={{ color: "#A180DB" }} />
              </button>
              <div style={{
                width: '450px',
                height: '235px'
              }} className="hotSectionTableHome">
              <Table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Brand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Kurkure
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-row justify-content-between">
            <div className="">
              <button className="homeBtn">
                Hot Creators <FaArrowRight style={{ color: "#A180DB" }} />
              </button>
              <div style={{
                width: '450px',
                height: '235px'
              }} className="hotSectionTableHome">
                <Table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Creators</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Kurkure
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div>
              <button className="homeBtn">
              Bartergram Recommendation <FaArrowRight style={{ color: "#A180DB" }} />
              </button>
              <div style={{
                width: '450px',
                height: '235px'
              }} className="hotSectionTableHome">
              <Table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Creators</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Kurkure
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="homeBtn">
            Report <FaArrowRight style={{ color: "#A180DB" }} />
          </button>
          <div className="reportDiv">
            <ReportCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
}
