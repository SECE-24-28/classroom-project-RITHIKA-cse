import React from "react";
import { BoxStyle } from "./Box-style";

const BoxComponent = () => {
  return (
    <BoxStyle>
      <h2>
        Impact at a <span className="highlight">Glance</span> 
      </h2>

      <div className="grid">
        <div className="card pink">
          <div className="text">
            <h3>Colleges</h3>
            <p>100+</p>
          </div>
          <img src="/college.png" alt="college" />
        </div>

        <div className="card blue">
          <div className="text">
            <h3>Students</h3>
            <p>1,00,000</p>
          </div>
          <img src="/students.png" alt="students" />
        </div>

        <div className="card green">
          <div className="text">
            <h3>Study Materials</h3>
            <p>1000+</p>
          </div>
          <img src="/books.png" alt="books" />
        </div>

        <div className="card yellow">
          <div className="text">
            <h3>Professional Trainers</h3>
            <p>150</p>
          </div>
          <img src="/trainers.png" alt="trainers" />
        </div>
      </div>
    </BoxStyle>
  );
};

export default BoxComponent;