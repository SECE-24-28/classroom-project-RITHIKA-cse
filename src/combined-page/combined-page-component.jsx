import React from "react";
import SymbolOfExcellenceComponent from "../symbol-of-excellence/symbol-of-excellence-component";
import TrustedbyComponent from "../trusted-by/trusted-by-component";
import OurPromisesComponent from "../our-promise/our-promise-component";
import GetInTouchComponent from "../get-in-touch/get-in-touch-component";
import "./combined-page-style.css";

const CombinedPageComponent = () => {
  return (
    <div className="combined-container">
      {/* Symbol of Excellence */}
      <SymbolOfExcellenceComponent />

      {/* Trusted By */}
      <TrustedbyComponent />

      {/* Our Promise */}
      <OurPromisesComponent />

      {/* Get In Touch */}
      <GetInTouchComponent />
    </div>
  );
};

export default CombinedPageComponent;

