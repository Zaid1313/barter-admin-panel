import React, { useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { brandDataRow } from "./Brands";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import Donut from "../components/Donut";
// import DataTable from "react-data-table-component";
import { Table } from "react-bootstrap";

const mockCampaignData = [
  { title: 'Nike 1', status: 'Live', creatorsApplied: 200, accManager: 'Aman', platform: 'Instagram' },
  { title: 'Nike 2', status: 'Closed', creatorsApplied: 400, accManager: 'Sahil', platform: 'Instagram' },
  { title: 'Nike 3', status: 'Closed', creatorsApplied: 250, accManager: 'Harshita', platform: 'YouTube' },
];

export default function BrandInfo() {
  const { brandName } = useParams(); // Get the brand name from the URL
  const navigate = useNavigate();
  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setCampaignData(mockCampaignData);
  }, []);

  // Find the brand details using the brand name
  const brand = brandDataRow.find((b) => b.name === brandName);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  const CustomButton = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#FFF",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          // border: "1px solid red",
          display: "flex",
          border:"none",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3.5rem",
          width: "100%",
          marginBottom: "0.8rem",
        }}
      >
        <span style={{ color: "#171A1F" }}>{text}</span>
        <MdArrowForwardIos style={{ color: "#79747E" }} />
      </button>
    );
  };

  const handleButtonClick = (extra) => {
    navigate(`/dealsScreen`, { state: { extra } });
  };

  const handleRowClick = (campaignTitle) => {
    navigate(`/all-brands/campaign-info/${campaignTitle}`);
  };

  return (
    <div className="brandInfoDiv">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <div
            className=""
            style={{
              borderRadius: "4px",
              maxWidth: "44.0625rem",
              height: "12.8rem",
            }}
          >
            <img
              className="d-block"
              style={{
                maxWidth: "44.0625rem",
                height: "12.5625rem",
                objectFit: "contain !important",
                borderRadius: "4px",
              }}
              src={"/images/brandPage/Rectangle-brand-img.png"}
              alt="cover-pic"
            />
            <div
              style={{
                position: "relative",
                bottom: "4.5rem",
                width: "100%",
                minHeight: "4.5rem",
                height: "fit-content",
                backgroundColor: "#6750A4",
                borderRadius: "4px",
              }}
            >
              <div className="brand-N-B">
                <h5>{brand.name}</h5>
                <p>{brand.email}</p>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                bottom: "11.2rem",
                left: "2rem",
                width: "5rem",
                height: "5rem",
                backgroundColor: "black",
                borderRadius: "50%",
                border: "1px solid white",
                overflow: "hidden",
              }}
            >
              <img
                src={"/images/brandPage/profile-pic.png"}
                alt="/images/sidebar/TrichromaticLogoB2 1.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="brand-details">
            <div className="overview-subscription-container">
              <div className="overview-box">
                <h5>Overview</h5>
                <div
                  style={{
                    margin: "28px 15px 0 15px",
                  }}
                  className="justify-content-between d-flex flex-row"
                >
                  <div>
                    <div className="d-flex flex-column align-items-center">
                      <p>60m+</p>
                      <p>Total Views</p>
                    </div>
                    <div className="mt-4 d-flex flex-column align-items-center">
                      <p>2 lac</p>
                      <p>Total Amount</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column align-items-center">
                      <p>500+</p>
                      <p>Total Creators</p>
                    </div>
                    <div className="mt-4 d-flex flex-column align-items-center">
                      <p>60k</p>
                      <p>Product Amount</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subscription-box">
                <h5>Subscription</h5>
                <div className="d-flex flex-row">
                  <div>
                    <div className="d-flex flex-row">
                      <p>Subscription status:</p>
                      <p
                        style={{
                          marginLeft: "2rem",
                          color: "#6750A4",
                          wordBreak: "break-all",
                        }}
                      >
                        {brand.email}
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p>Amount:</p>
                      <p style={{ marginLeft: "5.2rem", color: "#6750A4" }}>
                        12 lac
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p>Start Day:</p>
                      <p style={{ marginLeft: "4.8rem", color: "#6750A4" }}>
                        12/March/2024
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p>Next Payment:</p>
                      <p style={{ marginLeft: "2.8rem", color: "#6750A4" }}>
                        12/April/2024
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p>Type:</p>
                      <p style={{ marginLeft: "6.8rem", color: "#6750A4" }}>
                        {brand.subscription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spend-category-box">
            <h5>Spend by Category</h5>
            <div>
              <Donut />
            </div>
          </div>
          <div className="campaigns-box">
            <h5>Campaigns</h5>
            <Table >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Creators Applied</th>
                  <th>Acc. Manager</th>
                  <th>Platform</th>
                </tr>
              </thead>
              <tbody>
              {campaignData.map((campaign, index) => (
                  <tr style={{cursor:"pointer"}} key={index} onClick={() => handleRowClick(campaign.title)}>
                    <td>{campaign.title}</td>
                    <td>{campaign.status}</td>
                    <td>{campaign.creatorsApplied}</td>
                    <td>{campaign.accManager}</td>
                    <td>{campaign.platform}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div
          style={{
            marginLeft: "5px",
          }}
          className=""
        >
          <div className="brand-info-card">
            <h3>{brand.name}</h3>
            <p>Sports</p>
            <div className="info-brand">
              <div>
                <div className="d-flex flex-row">
                  <p>Email:</p>
                  <p style={{ marginLeft: "4rem", wordBreak: "break-all" }}>
                    {brand.email}
                  </p>
                </div>
                <div className="d-flex flex-row">
                  <p>Phone No:</p>
                  <p style={{ marginLeft: "2.1rem" }}>634387428462</p>
                </div>
                <div className="d-flex flex-row">
                  <p>Website:</p>
                  <p style={{ marginLeft: "2.9rem" }}>www.nike.com</p>
                </div>
                <div className="d-flex flex-row">
                  <p>Social Media:</p>
                  <div style={{ marginLeft: "1rem" }}>
                    <Link to="https://www.youtube.com/">
                      <FaInstagram
                        style={{
                          width: "24",
                          height: "24",
                          color: "black",
                        }}
                      />
                    </Link>
                    <Link>
                      <AiOutlineYoutube
                        style={{
                          width: "24",
                          height: "24",
                          color: "black",
                        }}
                      />
                    </Link>
                    <Link>
                      <CiLinkedin
                        style={{
                          width: "24",
                          height: "24",
                          color: "black",
                        }}
                      />
                    </Link>
                    <Link>
                      <FaXTwitter
                        style={{
                          width: "24",
                          height: "24",
                          color: "black",
                        }}
                      />
                    </Link>
                    <Link>
                      <AiOutlineFacebook
                        style={{
                          width: "24",
                          height: "24",
                          color: "black",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutBrandDiv" style={{}}>
            <div>
              <h6
                style={{ color: "#6750A4", fontSize: "18px", fontWeight: 500 }}
              >
                About Brand
              </h6>
              <p style={{ fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="">
              <CustomButton
                text="Wishlist"
                onClick={() => handleButtonClick(0)}
              />
              <CustomButton
                text="Deals Applied"
                onClick={() => handleButtonClick(1)}
              />
              <CustomButton
                text="Ongoing Deals"
                onClick={() => handleButtonClick(2)}
              />
              <CustomButton
                text="Total Deals Done"
                onClick={() => handleButtonClick(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
