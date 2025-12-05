import styled from "styled-components";

export const BoxStyle = styled.div`
  width: 1100px;
  max-width: 94%;
  margin: 40px auto 80px;
  text-align: center;
  padding: 10px 0;

  h2 {
    font-size: 48px;
    font-weight: 800;
    margin: 10px 0 36px;
    color: #222831;
    
  }

  .highlight {
    color: #ff3b57; 
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px 36px;
    align-items: start;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 28px;
    border-radius: 16px;
    height: 140px; 
    box-shadow: none;
    overflow: hidden;
  }

  .pink {
    background: #ffe9ec;
  }
  .blue {
    background: #e9f4ff;
  }
  .green {
    background: #eaffef;
  }
  .yellow {
    background: #fff0db;
  }

  .text {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .card h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #2f3b4a;
  }

  .card p {
    margin: 0;
    font-size: 34px;
    font-weight: 800;
    color: #000;
    line-height: 1;
  }

  .card img {
    width: 100px;
    height: auto;
    object-fit: contain;
    margin-left: 18px;
    transform: translateY(4px); /* subtle vertical alignment */
  }

  
  @media (max-width: 880px) {
    h2 {
      font-size: 34px;
    }
    .card p {
      font-size: 28px;
    }
    .card img {
      width: 84px;
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .card {
      height: 120px;
      padding: 18px;
    }
    .card img {
      width: 80px;
    }
  }
`;

/*
.flex-container {
  display: flex;
  flex-wrap: wrap;     // This allows items to move to next row 
  justify-content: space-between;
  gap: 20px;
}

.card {
  width: 48%;          // 2 cards per row (50% - gap) 
  padding: 20px;
  border-radius: 12px;
}
*/