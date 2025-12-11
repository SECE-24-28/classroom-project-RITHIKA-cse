import React from "react";
import { TrustedByStyle } from "./trusted-by-2-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChalkboardTeacher,
  faBook,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

const TrustedBy2Component = () => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>

      <div className="element">

        {/* CARD 1 - Teal - Icon Top */}
        <div className="card card-1">
          <div className="icon-circle top">
            <FontAwesomeIcon icon={faBuildingColumns} />
          </div>
          <div className="card-content">
            <div className="value">100+</div>
            <div className="name">COLLEGES</div>
          </div>
          <div className="color-border"></div>
        </div>

        {/* CARD 2 - Blue - Icon Bottom */}
        <div className="card card-2">
          <div className="color-border top"></div>
          <div className="card-content">
            <div className="value">150</div>
            <div className="name">PROFESSIONAL</div>
            <div className="name">TRAINERS</div>
          </div>
          <div className="icon-circle bottom">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </div>
        </div>

        {/* CARD 3 - Orange - Icon Top */}
        <div className="card card-3">
          <div className="icon-circle top">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <div className="card-content">
            <div className="value">1000+</div>
            <div className="name">STUDY MATERIALS</div>
            <div className="sub-name">AGH LMS</div>
          </div>
          <div className="color-border"></div>
        </div>

        {/* CARD 4 - Red - Icon Bottom */}
        <div className="card card-4">
          <div className="color-border top"></div>
          <div className="card-content">
            <div className="value">1,00,000</div>
            <div className="name">STUDENTS</div>
            <div className="sub-name">B2B:Placement Training</div>
          </div>
          <div className="icon-circle bottom">
            <FontAwesomeIcon icon={faHourglassHalf} />
          </div>
        </div>

      </div>
    </TrustedByStyle>
  );
};

export default TrustedBy2Component;