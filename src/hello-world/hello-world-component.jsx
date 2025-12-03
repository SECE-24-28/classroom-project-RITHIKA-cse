import React from "react";
import { HelloWorldStyle } from "./hello-world-style";

const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      <div className="top-banner">
        <h1>Learners Today, Leaders Tomorrow</h1>
        <p>
          With our continuous research and development, we provide you with an
          excellent Aptitude training.
        </p>
      </div>
    </HelloWorldStyle>
  );
};

export default HelloWorldComponent;