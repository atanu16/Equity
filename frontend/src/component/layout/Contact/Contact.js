import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import BgVideo from '../../../images/contact.mp4'

const Contact = () => {
  return (
    <div className="contactContainer">
    
    <video src={BgVideo} autoPlay muted loop class="video-bg" />
<div class="title"><a className="mailBtn" href="mailto:equity251@gmail.com">
        <Button>Contact Us</Button>
      </a></div>
      
    </div>
  );
};

export default Contact;
