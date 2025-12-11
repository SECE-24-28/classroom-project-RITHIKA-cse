import styled from "styled-components";

export const TrustedByStyle = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: #fff;
  min-height: 100vh;

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 70px;
    color: #333;
  }

  .element {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    position: relative;
    width: 190px;
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 10px;
  }

  .card-content {
    text-align: center;
    z-index: 1;
  }

  .value {
    font-size: 30px;
    font-weight: 700;
    color: #555;
    margin-bottom: 5px;
  }

  .name {
    font-size: 11px;
    font-weight: 600;
    color: #888;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    line-height: 1.5;
  }

  .sub-name {
    font-size: 11px;
    margin-top: 3px;
    font-weight: 500;
  }

  .card-3 .sub-name { color: #f5b041; }
  .card-4 .sub-name { color: #e74c3c; }

  /* Cards 1 & 3: L-shape bottom-left using pseudo-elements */
  .card-1::before,
  .card-3::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    border-radius: 0 0 0 8px;
  }

  .card-1::after,
  .card-3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 4px;
    height: 70%;
    border-radius: 0 0 0 8px;
  }

  .card-1::before, .card-1::after { background-color: #01c8c8; }
  .card-3::before, .card-3::after { background-color: #f5b041; }

  /* Cards 2 & 4: L-shape top-right using pseudo-elements */
  .card-2::before,
  .card-4::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 4px;
    border-radius: 0 8px 0 0;
  }

  .card-2::after,
  .card-4::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 70%;
    border-radius: 0 8px 0 0;
  }

  .card-2::before, .card-2::after { background-color: #00b7ff; }
  .card-4::before, .card-4::after { background-color: #e74c3c; }

  /* Icon circles */
  .icon-circle {
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    z-index: 2;
  }

  .icon-circle.top {
    top: -27px;
    left: 50%;
    transform: translateX(-50%);
  }

  .icon-circle.bottom {
    bottom: -27px;
    left: 50%;
    transform: translateX(-50%);
  }

  .card-1 .icon-circle {
    border: 3px solid #01c8c8;
    color: #01c8c8;
  }

  .card-2 .icon-circle {
    border: 3px solid #00b7ff;
    color: #00b7ff;
  }

  .card-3 .icon-circle {
    border: 3px solid #f5b041;
    color: #f5b041;
  }

  .card-4 .icon-circle {
    border: 3px solid #e74c3c;
    color: #e74c3c;
  }
`;