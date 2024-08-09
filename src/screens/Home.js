import React from "react";
import ReportCarousel from "../components/ReportCarousel";
import { FaArrowRight } from "react-icons/fa6";
// import { Table } from "react-bootstrap";
import DataTable from "react-data-table-component";
import NewBriefHomeCarousel from "../components/NewBriefHome";

const hotDealColumns = [
  {
    name: 'S.No',
    selector: row => row.sno,
    sortable: true,
  },
  {
    name: 'Brand',
    selector: row => row.brand,
    sortable: true,
  },
];

const hotDealData = [
  {
    id: 1,
    sno: 1,
    brand: 'Kurkure',
  },
];

const hotCreatorColumns = [
  {
    name: 'S.No',
    selector: row => row.sno,
    sortable: true,
  },
  {
    name: 'Creators',
    selector: row => row.creator,
    sortable: true,
  },
];

const hotCreatorData = [
  {
    id: 1,
    sno: 1,
    creator: 'Kurkure',
  },
];

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
        <div className="" style={{ marginTop: "30px" }}>
          <h4 className="h4Style">Brand POC to be Assigned </h4>
          <div className="reportDiv">
            <NewBriefHomeCarousel />
          </div>
        </div>
        <div className="hotSectionContainer">
          <div className="hotSection">
            <div className=" d-flex flex-row justify-content-between">
              <div className="">
                <button className="homeBtn">
                  Hot Deal <FaArrowRight style={{ color: "#A180DB" }} />
                </button>
                <div
                  style={{
                    width: "450px",
                    height: "235px",
                  }}
                  className="hotSectionTableHome"
                >
                   <DataTable
                    columns={hotDealColumns}
                    data={hotDealData}
                    noHeader
                  />
                </div>
              </div>
              <div>
                <button className="homeBtn">
                  Bartergram Recommendation{" "}
                  <FaArrowRight style={{ color: "#A180DB" }} />
                </button>
                <div
                  style={{
                    width: "450px",
                    height: "235px",
                  }}
                  className="hotSectionTableHome"
                >
                  <DataTable
                    columns={hotDealColumns}
                    data={hotDealData}
                    noHeader
                  />
                </div>
              </div>
            </div>
            <div className=" d-flex flex-row justify-content-between">
              <div className="">
                <button className="homeBtn">
                  Hot Creators <FaArrowRight style={{ color: "#A180DB" }} />
                </button>
                <div
                  style={{
                    width: "450px",
                    height: "235px",
                  }}
                  className="hotSectionTableHome"
                >
                  <DataTable
                    columns={hotCreatorColumns}
                    data={hotCreatorData}
                    noHeader
                  />
                </div>
              </div>
              <div>
                <button className="homeBtn">
                  Bartergram Recommendation{" "}
                  <FaArrowRight style={{ color: "#A180DB" }} />
                </button>
                <div
                  style={{
                    width: "450px",
                    height: "235px",
                  }}
                  className="hotSectionTableHome"
                >
                  <DataTable
                    columns={hotCreatorColumns}
                    data={hotCreatorData}
                    noHeader
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="homeBtn">
            Report <FaArrowRight style={{ color: "#A180DB" }} />
          </button>
          <div className="reportDiv">
            <ReportCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
