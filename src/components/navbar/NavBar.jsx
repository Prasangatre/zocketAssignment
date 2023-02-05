import React from "react";
import "./NavBar.css";
import crown from "./crown.png";
import gift from "./gift.png";
import notification from "./notification.png";
import logonew from "./logonew.png";
import trans from "./trans.png";
const NavBar = () => {
  return (
    <span>
      <div className="topBar">
        <div className="lastPart">
          <div className="headingtop">Free trial ends in 2 days</div>
          <div className="secondHeading">
            <div className="topImage">
              <img src={crown} />
            </div>
            <div className="buy">Buy Plan</div>
          </div>
          <div className="thirdHeading">
            <img src={gift} />
          </div>
          <div className="fourthHeading">
            <img src={notification} />
          </div>
          <div className="fifthHeading">
            <img src={logonew} />
          </div>
          <div className="fifthHeading">Mukund's Cake Shop</div>
          <div className="sixthHeading">
            <img src={trans} />
          </div>
        </div>
      </div>
    </span>
  );
};

export default NavBar;
