import styled from "styled-components";

export const OurPromiseStyle = styled.div`
    width: 100%;
    max-width: 1800px;
    margin: 1rem auto;
    


    h2 {
        color: black;
        font-size: 32px;
        font-weight: 600px;
        text-align: center;
        font-family: "Work Sans", sans-serif;
    }

    .intro {
        color: rgb(86, 102, 131);
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        margin-block: 8px;
        font-family: "Work Sans", sans-serif;
        margin-bottom: 40px;
    }

    .layout {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 20px;
    }

    .c1{
        border-top: 4px solid rgb(68, 178, 179);
        max-width: 380px;
        gap: 20px;  
        padding: 1.5rem;
        background-color: rgb(255, 255, 255);
    }

    .c2{
        border-top: 4px solid rgb(239, 175, 75);
        max-width: 380px;
        gap: 20px;  
        padding: 1.5rem;
        background-color: rgb(255, 255, 255);
    }

    .c3{
        border-top: 4px solid rgb(0, 189, 235);
        max-width: 380px;
        gap: 20px;  
        padding: 1.5rem;
        background-color: rgb(255, 255, 255);
    }

    .c4{
        border-top: 4px solid rgb(134, 74, 249);max-width: 380px;
        gap: 20px;  
        padding: 1.5rem;
        background-color: rgb(255, 255, 255);
    }

    .c5{
        border-top: 4px solid rgb(252, 41, 71);
        max-width: 380px;
        gap: 20px;  
        padding: 1.5rem;
        background-color: rgb(255, 255, 255);
        grid-column: span 2;      
        justify-self: center;     
        width: 35%; 
    }

    .c6{
        border-top: 4px solid rgb(50, 199, 102);
        max-width: 380px;
        gap: 20px;  
        padding: 1.5rem;
        background-color: rgb(255, 255, 255);
        grid-column: span 2;       
        justify-self: center;      /* centers the card in those 2 columns */
        width: 35%; 
        
    }

    .c5:nth-of-type(5) {
       justify-self: end;
   }

    .c6:nth-of-type(6) {
       justify-self: start;
   }

    h3 {
        color: rgb(119, 119, 119);
        font-size: 18px;
        font-family: "Work Sans", sans-serif;
        font-weight: 600;

    }

    text {
        font-family: "Work Sans", sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: rgb(86, 102, 131);
    }

    @media (max-width: 850px) {
        .layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
    }

        .c5 {
            width: 90%;
            padding-left: 0;
            grid-column: span 1;
            justify-self: end;
    }

        .c6 {
            width: 90%;
            padding-right: 0;
            grid-column: span 1;
            justify-self: start;
    }
}


    @media (max-width: 600px) {
        .layout {
            display: grid;
            grid-template-columns: 1fr;
    }

        .c5 {
            width: 90%;
            padding-left:0;
            padding-right: 100px;
            grid-column: span 1;
            justify-self: end;
    }

        .c6 {
            width: 90%;
            padding-right: 0;
            grid-column: span 1;
            justify-self: start;
    }
    }


`;