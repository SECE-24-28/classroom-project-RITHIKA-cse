import styled from "styled-components";

export const HelloWorldStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background: #ffffff;

  .top-banner {
    width: 305%;
    background: #ff2d3c;            
    padding: 45px 20px;
    border-radius: 80px;            
    text-align: center;
  }

  .top-banner h1 {
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }

  .top-banner p {
    color: white;
    margin-top: 12px;
    font-size: 18px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
`;