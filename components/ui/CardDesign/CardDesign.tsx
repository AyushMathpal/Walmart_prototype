import React from "react";
import "./css/rotating-card.css";
import Image from "next/image";
import MarketPlaceCard from "@/components/MarketPlaceCard";
const CardDesign = ({
  back,
  front,
}: {
  back: React.ReactNode;
  front: React.ReactNode;
}) => {
  return (
    <div className="col-md-4 col-sm-6 w-full !h-[30vh]"
   >
      <div className="card-container ">
        <div className="card">
          <div className="front">
            {/* <div className="">
              <img src="/images/rotating_card_thumb2.png" />
            </div> */}
            <div className="">
              {/* <Image
                className="img-circle"
                src="/rotating_card_profile.png"
                alt="profile-image"
                width={300}
                height={300}
              /> */}
            </div>
            <div className="content">
              <div className="main">
                {front}
              </div>
            </div>
          </div>



          <div className="back">
            {/* <div className="header">
              <h5 className="motto">
                "To be or not to be, this is my awesome motto!"
              </h5>
            </div> */}
            <div className="content">
              {back}
              {/* <div className="main">
                <h4 className="text-center">Job Description</h4>
                <p className="text-center">
                  Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                  others...
                </p>

                <div className="stats-container">
                  <div className="stats">
                    <h4>235</h4>
                    <p>Followers</p>
                  </div>
                  <div className="stats">
                    <h4>114</h4>
                    <p>Following</p>
                  </div>
                  <div className="stats">
                    <h4>35</h4>
                    <p>Projects</p>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="footer">
              <div className="social-links text-center">
                <a href="https://creative-tim.com" className="facebook">
                  <i className="fa fa-facebook fa-fw"></i>
                </a>
                <a href="https://creative-tim.com" className="google">
                  <i className="fa fa-google-plus fa-fw"></i>
                </a>
                <a href="https://creative-tim.com" className="twitter">
                  <i className="fa fa-twitter fa-fw"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
