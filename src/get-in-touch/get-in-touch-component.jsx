import React from "react";
import { GetInTouchStyle } from "./get-in-touch-style";
import contactImg from "../assets/get-in-touch.jpg.jpeg";
const GetInTouchComponent = () => {
  return (
    <GetInTouchStyle>
      <div>
        <h1>GET IN TOUCH</h1>
        <p>
          Have questions or feedback? We&apos;re here to help. Send us a message
          and we&apos;ll respond soon.
        </p>
        <button>Contact Us</button>
      </div>
        <img src={contactImg} alt="Get in touch" />
      <div>
        
      </div>
    </GetInTouchStyle>
  );
};

export default GetInTouchComponent;