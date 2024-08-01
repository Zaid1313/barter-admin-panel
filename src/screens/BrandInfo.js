import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { brandDataRow } from "./Brands";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

export default function BrandInfo() {
  const { brandName } = useParams(); // Get the brand name from the URL
  const navigate = useNavigate();

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
          backgroundColor: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <span style={{ color: "#9095A0" }}>{text}</span>
        <i className="fas fa-arrow-right" style={{ color: "#79747E" }}></i>
      </button>
    );
  };

  const handleButtonClick = (extra) => {
    navigate(`/dealsScreen`, { state: { extra } });
  };

  return (
    <div className="brandInfoDiv">
      <div className="d-flex flex-row justify-content-between">
        <div
          className="position-relative"
          style={{ borderRadius: "4px", maxWidth: "44.0625rem" }}
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
              bottom: '4.5rem',
              width: "100%",
              height: "4.5rem",
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
        {/* </div> */}
        <div style={{
          marginLeft:"5px",
        }} className="">
          <div className="brand-info-card">
            <h3>{brand.name}</h3>
            <p>Sports</p>
            <div className="info-brand">
              <div>
                <p>Email:</p>
                <p>Phone No:</p>
                <p>Website:</p>
                <p>Social Media:</p>
              </div>
              <div
                style={{
                  marginLeft: "15px",
                }}
              >
                <p>Nike@gmail.com</p>
                <p>634387428462</p>
                <p>www.nike.com</p>
                <div>
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
          <div
            style={{
              width: "18.5rem",
              height: "43.25rem",
              border: "1px solid #D0BCFF",
              marginTop: "6px",
              borderRadius: "4px"
            }}
          >
            <div className="p-3">
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
