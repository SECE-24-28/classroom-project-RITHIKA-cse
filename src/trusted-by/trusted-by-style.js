import styled from "styled-components";
export const TrustedByStyle = styled.div`
  padding: 40px 20px;

  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2rem;
    font-weight: 700;
  }

  .parent {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .numbers {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    color: #555;
  }

  .red-numbers {
    color: #ef5350;
  }

  .details {
    text-align: center;
    font-size: 13px;
    color: #555;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .subtitle {
    font-size: 11px;
    color: #999;
    margin-top: 2px;
  }

  .orange-text {
    color: #ffb74d;
  }

  .red-text {
    color: #ef5350;
  }

  .child {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 30px 20px;
    width: 200px;
    height: 160px;
    border: 3px solid;
    background: white;
  }

  .child.teal {
    border-color: #40c9a2;
  }

  .child.cyan {
    border-color: #00bcd4;
  }

  .child.orange {
    border-color: #ffb74d;
  }

  .child.red {
    border-color: #ef5350;
  }

  .icon-circle {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid;
    background: white;
    font-size: 18px;
  }

  .top-left {
    top: -25px;
    left: -25px;
  }

  .top-right {
    top: -25px;
    right: -25px;
  }

  .bottom-right {
    bottom: -25px;
    right: -25px;
  }

  .teal-icon {
    border-color: #40c9a2;
    color: #40c9a2;
  }

  .cyan-icon {
    border-color: #00bcd4;
    color: #00bcd4;
  }

  .orange-icon {
    border-color: #ffb74d;
    color: #ffb74d;
  }

  .red-icon {
    border-color: #ef5350;
    color: #ef5350;
  }
`;