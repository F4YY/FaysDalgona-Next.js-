import styled from "styled-components";
 //activate this when deployed on netlify:
import bgpattern from "../public/images/bg-pattern-intro-desktop.svg";

export const Container = styled.div`
  --orange: #FF7F00;
  --darkorange: #CC5500;
  --red: #FF3333;
  --darkred: #990000;
  --white: rgba(245, 245, 245, 1);
  --lightorange: rgba(255, 204, 144, 0.9);
  --lightblue: rgba(153, 204, 255, 0.3);
  --darkblue: rgba(33, 33, 62, 1);
  --lightgrey: rgba(138, 138, 142, 1);
  --Very-dark-desaturated-blue: hsl(238, 29%, 16%);
  --Soft-red: hsl(14, 88%, 85%);
  --Soft-violet: hsl(273, 75%, 66%);
  --Soft-blue: hsl(240, 73%, 65%);
  --Very-dark-grayish-blue: hsl(237, 12%, 33%);
  --Dark-grayish-blue: hsl(240, 6%, 50%);
  --Light-grayish-blue: hsl(240, 5%, 91%);
  --Main-font: Roboto, sans-serif;
  --Secondary-font: var(--secondary-font);
  --bg_joinbutton: linear-gradient(180deg, #D15B05, #963F01 100%);
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  --extralight: 200;
  --regular: 400;
  --medium: 500;
  --bold: 700;
  --FDtext: 'Montez', cursive;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  /* activate this when deploy to vercel:
  background: url('/_next/static/media/bg-pattern-intro-desktop.a96b9a21.svg') center center no-repeat; */

  /* activate this when deploy to netlify: */
  background: url('${bgpattern}') center center no-repeat;
  background-size: cover 100%;
  @media (max-width: 640px) {
    background-size: cover;
  }
`;