import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./Stepper.css";
import arrowstar from "./arrowstar.png";
import eye from "./eye.png";
import human from "./human.png";
import message from "./message.png";
import clipboard from "./clipboard.png";
import shop from "./shop.png";
import phone from "./phone.png";
import two from "./two.png";
import onest from "./onest.png";
import twost from "./twost.png";
import threest from "./threest.png";
import fourst from "./fourst.png";
import fivest from "./fivest.png";
import sixst from "./sixst.png";
import sevenst from "./sevenst.png";
import eightst from "./eightst.png";
import ninest from "./ninest.png";
import tickcircle from "./tickcircle.png";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import calendar from "./calendar.png";
import Slider from "@mui/material/Slider";
import India from "./India.png";
import Vector from "./Vector.png";
import cakeones from "./cakeones.png";
import caketwos from "./caketwos.png";
import cakethrees from "./cakethrees.png";
import cakefours from "./cakefours.png";
import profileimage from "./profileimage.png";
import thumb from "./thumb.png";

const steps = [
  "What you want to do",
  "Choose product",
  "Campagin settings",
  "Ready to go",
];
const StepperView = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [verticalStep, setVerticalStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const Veicalsteps = [
    {
      label: "Budget and dates info",
    },
    {
      label: "Location info",
    },
  ];
  const marks = [
    {
      value: 0,
      label: "100",
    },

    {
      value: 100,
      label: "100000",
    },
  ];
  const SliderData = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 100,
      label: "30",
    },
  ];
  const FinalStepData = [
    {
      cakeImage: cakeones,
    },

    {
      cakeImage: caketwos,
    },
    {
      cakeImage: cakethrees,
    },
    {
      cakeImage: cakefours,
    },
  ];
  const Data = [
    {
      icon: phone,
      topHeading: "Get Leads as calls",
      bottomHeading: "Reach broad audience and get leads through calls",
    },
    {
      icon: message,
      topHeading: "Get Leads as Facebook messages",
      bottomHeading: "Get more FB messages from Leads",
    },
    {
      icon: human,
      topHeading: "Increase page followers",
      bottomHeading: "Encourage customers to follow your page",
    },
    {
      icon: human,
      topHeading: "Increase page followers",
      bottomHeading: "Encourage customers to follow your page",
    },
    {
      icon: two,
      topHeading: "Get Customer Leads",
      bottomHeading: "Encourage customers to take action",
    },
    {
      icon: eye,
      topHeading: "Get more youtube views",
      bottomHeading: "Increase organic views by obtaining user attention ",
    },
    {
      icon: arrowstar,
      topHeading: "Get more website traffic",
      bottomHeading: "Get the right people to visit your website ",
    },
    {
      icon: shop,
      topHeading: "Increase Live store traffic",
      bottomHeading: "Drive visits to local stores, restaurants & Dealerships ",
    },

    {
      icon: clipboard,
      topHeading: "Increase the catalogue sales",
      bottomHeading: "Drive the sales of your catalogue and get more leads ",
    },
  ];
  const DataTwo = [
    {
      icon: onest,
      topHeading: "Bluberry cake with raw toppings",
      bottomHeading: "Rs: 2,290",
    },
    {
      icon: twost,
      topHeading: "Chocolate truffle cake",
      bottomHeading: "Rs: 2,190",
    },
    {
      icon: threest,
      topHeading: "Browine cake with fluffy cream",
      bottomHeading: "Rs: 1,222",
    },
    {
      icon: fourst,
      topHeading: "Ferro rocher cake",
      bottomHeading: "Ferro rocher cake",
    },
    {
      icon: fivest,
      topHeading: "Custurd mixed with fruit cake",
      bottomHeading: "Rs: 2.456",
    },
    {
      icon: sixst,
      topHeading: "Best raw topping choco cake",
      bottomHeading: "Rs: 2,345",
    },
    {
      icon: sevenst,
      topHeading: "Green cup cakes",
      bottomHeading: "Rs: 1,234",
    },
    {
      icon: eightst,
      topHeading: "Blueberry topping cakes",
      bottomHeading: "Rs: 2,456",
    },
    {
      icon: ninest,
      topHeading: "Strawberry cakes with blueberry",
      bottomHeading: "Rs: 2,345",
    },
  ];
  function valuetext(value) {
    console.log(value * 100, "here");
    const data = value * 100;
    return `Rs${data}`;
  }
  function valuetextSlider(value) {
    const data = value * 100;
    return `Rs${data}`;
  }
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className="stepperContent">
          {activeStep === 0 ? (
            <div className="stepContainer">
              <div className="one">
                <div className="stepOneHeadingSection">
                  What do you want to do?
                  <span className="steponeSpan">(Step 1 of 4)</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: "30px",
                  }}
                >
                  {Data.map((data) => (
                    <div className="box">
                      <div className="boxIcon">
                        <img src={data.icon} />
                      </div>
                      <div className="boxContent">
                        <div className="boxTopHeading">{data.topHeading}</div>
                        <div className="boxBottomHeading">
                          {data.bottomHeading}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="ButtonView" onClick={handleNext}>
                  <div className="buttonText">Continue</div>
                </div>
              </div>
            </div>
          ) : activeStep === 1 ? (
            <div className="stepContainer">
              <div className="two">
                <div className="stepOneHeadingSection">
                  Choose the Product
                  <span className="steponeSpan">(Step 2 of 4)</span>
                </div>
                <div
                  className="mapContainer"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: "30px",
                  }}
                >
                  {DataTwo.map((data) => (
                    <div className="boxTwo">
                      <div className="boxIconTwo">
                        <img src={data.icon} />
                      </div>
                      <div className="boxContentTwo">
                        <div className="boxtwoTopHeading">
                          {data.topHeading}
                        </div>
                        <div className="boxtwoBottomHeading">
                          {data.bottomHeading}
                        </div>
                      </div>
                      <div className="tickcircle">
                        <img src={tickcircle} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="ButtonView" onClick={handleNext}>
                  <div className="buttonText">Continue</div>
                </div>
              </div>
            </div>
          ) : activeStep === 2 ? (
            <div className="threeContainer">
              <div className="three" style={{ width: "55vw" }}>
                <div>
                  <Stepper activeStep={verticalStep} orientation="vertical">
                    {Veicalsteps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">
                                Last step
                              </Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          {verticalStep === 0 ? (
                            <div className="contentOne">
                              <div className="topVrticalContainer">
                                <div className="topVc1">Budget Timeline</div>
                                <div style={{ display: "flex" }}>
                                  <div className="topVc2Blue">LifeTime</div>
                                  <div className="topVc2White">Daily</div>
                                </div>
                              </div>
                              <div className="bottomVerticalSection">
                                <div className="section1">
                                  <div className="bvHeading">Start date</div>
                                  <div className="bvContainer">
                                    <div className="calenderIcon">
                                      <img src={calendar} />
                                    </div>
                                  </div>
                                </div>
                                <div className="section2">
                                  <div className="bvHeading">End date</div>
                                  <div className="bvContainer">
                                    <div className="calenderIcon">
                                      <img src={calendar} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="sliderbv">
                                <div className="sliderBudget">
                                  <div className="sone">
                                    Enter campaign budget
                                  </div>
                                  <div className="stwo">
                                    <div className="sicon">
                                      <img src={India} />
                                    </div>
                                    <div className="inr">INR</div>
                                  </div>
                                </div>
                                <div
                                  className="orignalSlider"
                                  style={{ width: "95%" }}
                                >
                                  <Slider
                                    aria-label="Custom marks"
                                    defaultValue={10}
                                    getAriaValueText={valuetext}
                                    valueLabelDisplay="on"
                                    step={1}
                                    marks={marks}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="vertialtwo">
                              <div className="topVrticalContainer">
                                <div className="topVc1">Location Type</div>
                                <div style={{ display: "flex" }}>
                                  <div className="topVc2White">location</div>
                                  <div className="topVc2Blue">Radius</div>
                                </div>
                              </div>
                              <div className="secondBottomContainer">
                                <div className="titlesbc">Select Location</div>
                                <div className="filedBoxContainer">
                                  <div className="fbcText">
                                    Select a place name, address or coordinates
                                  </div>
                                  <div className="fbcIcon">
                                    <img src={Vector} />
                                  </div>
                                </div>
                              </div>
                              <div className="secondSlider">
                                <div className="titlesc">
                                  Select target radius
                                </div>
                                <div className="secondSlide">
                                  <Slider
                                    aria-label="Custom marks"
                                    defaultValue={10}
                                    getAriaValueText={valuetextSlider}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    marks={SliderData}
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={() =>
                                  setVerticalStep((prev) => prev + 1)
                                }
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? (
                                  <></>
                                ) : (
                                  "Continue"
                                )}
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div className="ButtonView" onClick={handleNext}>
                    <div className="buttonText">Continue</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="stepContainerNew">
              <div className="four">
                <div className="stepOneHeadingSection">
                  Ready to go
                  <span className="steponeSpan">(Step 4 of 4)</span>
                </div>
                <div className="fourContent">
                  {
                    FinalStepData.map((data)=>    <div className="card">
                    <div className="topSeCtion">
                      <div className="imageProfile">
                        <img src={profileimage} />
                      </div>
                      <div className="titleShop">
                        <div className="mukund">Mukund's Cake Shop</div>
                        <div className="sponsored">Sponsored</div>
                      </div>
                    </div>
                    <div className="nextSectionm">
                      We are the best bakery around you. Please like my page to
                      get updates on exciting offers and discounts
                    </div>
                    <div className="cakeImage">
                      <div style={{width:'75%'}}>  <img
                        style={{
                          width: "100%",
                        }}
                        src={data.cakeImage}
                      /></div>
                    
                    </div>
                    <div className="bottomTitle">
                      <div className="mukund">Mukund Cake Shop</div>
                      <div className="like">
                        <div className="likeImage">
                          <img src={thumb} />
                        </div>
                        <div className="likes">Like</div>
                      </div>
                    </div>
                  </div>)
                  }
              
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="ButtonViewNew">
                  <div className="buttonText">Create Campagin</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};
export default StepperView;
