// get-in-touch-style.js
import styled from "styled-components";

export const GetInTouchStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;
  background: #ff4b61;
  color: #ffffff;
  font-family: Arial, sans-serif;
  width: 100vw;             
  margin-left: calc(50% - 50vw);

  h1 {
    font-size: 50px;
    letter-spacing: 4px;
    margin-bottom: 16px;
    margin-left:50px;
  }

  p {
    font-size: 18px;
    max-width: 360px;
    margin-bottom: 20px;
    margin-left:50px;
  }

  button {
    padding: 10px 24px;
    border-radius: 4px;
    border: none;
    background: #ffffff;
    color: #333333;
    cursor: pointer;
    margin-left:50px;
  }
   img {
    width: 350px;         
    height: 350px;
    border-radius: 50%;    
    object-fit: cover;     
    margin-left: 60px;
  }
`;