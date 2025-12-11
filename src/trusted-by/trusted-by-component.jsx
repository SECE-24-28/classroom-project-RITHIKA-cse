import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { faBuildingColumns, faBook, faUsers, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>
      <div className="parent">
        <div className="child teal">
          <div className="icon-circle teal-icon top-left">
            <FontAwesomeIcon icon={faBuildingColumns} />
          </div>
          <span className="numbers">100+</span>
          <span className="details">COLLEGES</span>
        </div>
        <div className="child cyan">
          <span className="numbers">150</span>
          <span className="details">PROFESSIONAL</span>
          <span className="details">TRAINERS</span>
          <div className="icon-circle cyan-icon bottom-right">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
        </div>
        <div className="child orange">
          <div className="icon-circle orange-icon top-right">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <span className="numbers">1000+</span>
          <span className="details">STUDY MATERIALS</span>
          <span className="subtitle orange-text">AGH LMS</span>
        </div>
        <div className="child red">
          <span className="numbers red-numbers">1,00,000</span>
          <span className="details red-text">STUDENTS</span>
          <span className="subtitle red-text">B2B:Placement Training</span>
          <div className="icon-circle red-icon bottom-right">
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>
      </div>
    </TrustedByStyle>
  );
};
export default TrustedbyComponent;