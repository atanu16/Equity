import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/team._equityy";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://i.ibb.co/JyvpkkB/Icon-removebg-preview.png"
              alt="Founder"
            />
            <Typography>Team Equity</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @TeamEquity.
            </span>
            <span>
            <br></br>Ayush Sinha (20BCS2605) <br></br>
            Piyush Parvatiyar (20BCS1516)<br></br>
            Atanu Bera(20BCS2564)<br></br>
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="j"
              target="blank"
            >
              
            </a>

            <a href="https://instagram.com/team._equityy" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
