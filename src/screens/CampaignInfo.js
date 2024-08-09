import React from "react";
import { GoPencil } from "react-icons/go";

export default function CampaignInfo() {
  const handleaccManagerBtnClick = (extra) => {
    // navigate();
    console.log("button clicked");
  };

  return (
    <div className="campaignInfoPage">
      <div className="d-flex flex-row">
        <div className="upcomingCampBtn" onClick={{}}>
          <img
            src="https://s3-alpha-sig.figma.com/img/7f75/abb6/13e815b248c0a26c6cdc3a587d32f965?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UE3xyIJUarQFLc3Xl~0fKlq5LsGA09CzWy8EMvrjA4kXAoxcydy0NNXXjbcvqpIWCjpNtvulAaUUYpeGBJWPoqMiwCHmMBrSvS-QCANGuOeuSUaJ198~N8CWNQhCgDZnUZBcEUkKSO6ef2DhXo4fQ1nFYYAT7lv4RdYMosfMvAxQXVSMEE6pk1m3u1~kjUhjKOITI2PjbXM0S~MZSqEuMjdhpWv4mZhSy0HJchX7kqhh9LVSonSpgxR403XEoP~rbMtS~hfpJVIv277WlgIT5faCOwg~xo5UlOADG6lmcrMQJvYIHhC2F2swDEcjri~WV-9xVTWPR~IEpLjhSEPAkw__"
            style={{
              width: "36px",
              height: "38px",
            }}
            alt=""
          />
          <div style={{ marginLeft: "12px" }}>
            <h6>Upcoming Diwali Campaign Plan</h6>
            <p>Dabur | Created on Mar 27, 2024</p>
          </div>
        </div>
        <button
          className="accManagerBtn"
          onClick={() => handleaccManagerBtnClick()}
        >
          <h5>Account Manger</h5>
          <p>
            Aman Modak <GoPencil />
          </p>
        </button>
      </div>
      <div className="d-flex flex-row">
        <div>
          <div className="campaign-details-container">
            <div className="details-header font-weight-bold text-dark mb-3">
              Details
            </div>
            <div className="details-row d-flex justify-content-between mb-2">
              <div className="">
                <h6>Campaign Duration</h6>
                <p>1st July - 31st July</p>
              </div>
              <div className="">
                <h6>Creators</h6>
                <p>120</p>
              </div>
              <div className="">
                <h6>Followers</h6>
                <p>100k+</p>
              </div>
              <div className="">
                <h6>Location</h6>
                <p>Mumbai</p>
              </div>
              <div className="">
                <h6>Age</h6>
                <p>20-25</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            // border: "1px solid red",
            marginLeft: "15px",
            marginTop: "25px",
            // width: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src="https://s3-figma-videos-production-sig.figma.com/video/1344971823054351141/TEAM/f6ed/ab97/-6cfb-48b3-bce3-74fc812fc9d0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FBA-tC1WbQQeT8ZlPQbc9ZTMPIDo43F8cDzNxh3lWmsSwy5922y0pNM0Zjn7qkae4PC8kvt-KM0r60ZfSGn1C29O-Epk2o5bZfe-nZbL83Fp~mWzifd7535RzuZY8zJ78XJvMQtqp7eQ8pcBgkAoo07sJR-wYp2xHgxjv546lbGJZVG9YvjhJrlPrdsSWrdXs~7IuW0UvMNNdyj55cghMwZCCjpBAYN6b6deSn-Vts3gjpAK87EUT8jFt1SD3g6IBTxXZNl8MJ0tYYHQxjfWeHcGEyKWtRixrJr6xo~EuH7g~qBXiSjQevVMvg4F7KN6QbNiPinXJu6Ia54X5hs78A__"
            // src="https://videocdn.cdnpk.net/videos/463f133f-78ba-4d6f-a588-cfb1537b6149/horizontal/previews/videvo_watermarked/large.mp4"
            controls
            autoplay
            loop
            style={{
              width: "100%",
              height: "380px",
              borderRadius: "8px",
            }}
          />
          <div
            className=""
            style={{
              width: "16rem",
              marginTop: "16px",
              borderRadius: "10px",
              border: "1px solid #E8DEF8",
              padding: "14px 16px 14px 16px"
            }}
          >
            <div>
              <h6
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                About
              </h6>
              <p style={{ fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to
              </p>
              <h6>About The Campaign</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
