import { Table } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import StepperView from "../components/stepper/StepperView";
import TableView from "../components/tablecontainer/TableView";
import "./Home.css";
import house from "./house.png";
import Frame from "./Frame.png";
import vh from "./vh.png";
import bag from "./bag.png";
import profile from "./profile.png";
import down from "./down.png";
import addcircle from "./addcircle.png";
const Home = () => {
  const [openStepper, setOpenStepper] = useState(false);
  return (
    <div style={{ background: "pink", position: "relative" }}>
      <div className="sidebar">
        <div className="startBarStartHere">
          <div className="imageContainerSide">
            <img src={Frame} />
          </div>
          <div className="iconAndTextContainer">
            <div className="oneTc">
              <img src={house} />
              <div className="textiandtc">Home</div>
            </div>
            <div className="oneTc">
              <img src={vh} />
              <div className="textiandtc">Campagin</div>
            </div>
            <div className="oneTc">
              <img src={bag} />
              <div className="textiandtc">Products</div>
            </div>
            <div className="oneTc">
              <img src={profile} />
              <div className="textiandtc">Customers</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavBar />
      </div>

      {openStepper ? (
        <div className="mainContainer">
          <div className="mainContainerView">   <div className="headingSection">
            <div className="headingLeftNew">
              <div className="headingRightSection1">Your Ad Campagin</div>
              <div className="headingRightSection2">Launch In Easy 4 Steps</div>
            </div>
          </div>
          <div className="stepperSection">
            <StepperView />
          </div></div>
       
        </div>
      ) : (
        <div className="mainContainer">
          <div className="mainContainerView">
            <div className="headingSection">
              <div className="headingLeft">
                <div className="headingRightSection1">Your Campagin</div>
                <div className="headingRightSection2">
                  Check the list of campigns you created
                </div>
              </div>
              <div className="headingRight">
                <div className="icon">
                  <img src={addcircle} />
                </div>
                <div
                  className="campaginText"
                  onClick={() => setOpenStepper(true)}
                >
                  Create New Campagin
                </div>
              </div>
            </div>
            <div className="subContainerView">
              <div className="subContainer">
                <div className="topSection">
                  <div className="subRight">
                    <div className="inputboxContainer">
                      <input
                        style={{
                          padding: "10px",
                          fontSize: "16px",
                          borderRadius: "5px",
                          border: "none",
                        }}
                        type="text"
                        placeholder="Search For Campagin"
                      />
                    </div>
                  </div>
                  <div className="subLeft">
                    <div className="platform">Platform</div>
                    <div className="platformBox">
                      <div className="textpb">All Platform</div>
                      <div className="iconpb">
                        <img src={down} />
                      </div>
                    </div>
                    <div className="status">status</div>
                    <div className="platformBox">
                      <div className="textpb">All Status</div>
                      <div className="iconpb">
                        <img src={down} />
                      </div>
                    </div>
                    <div className="platformBox">
                      <div className="textpb">All Date Range</div>
                      <div className="iconpb">
                        <img src={down} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottomSection">
                  <TableView />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
