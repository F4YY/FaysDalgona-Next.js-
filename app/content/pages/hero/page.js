'use client'
import React from 'react';
import {
  FDdesc,
  FDimage,
  FDindo,
  FDtext,
  ReservetableButton,
  StyledFeatures,
  StyledHeroSection
} from './styled_hero.js';

const HeroSection = () => {
  const handleClick = (anchor) => () => {
    navigate(anchor)
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
        }
      };
  return (
    <StyledHeroSection id="Home-section">
      <StyledFeatures>
        <FDtext>Fay's Dalgona</FDtext>
        <FDindo>Indonesia</FDindo>
        <FDimage
          src={require("../../../images/FD_homepage.jpg")}
          alt="homepage"
          priority
        />
        <FDdesc>
          Fay's Dalgona offers you happiness and glory by serving tasty authentic Dalgona drinks. Explore our selection of 10 different flavors of Dalgona that can sweeten your every day. Try them all and experience the complete feeling of happiness.
          Additionally, we also serve delicious food options such as Mie Nyemek, Croffle Original, and Sate Bakso Seafood, perfect to accompany your Dalgona experience.
        </FDdesc>
        <ReservetableButton href="#Reservation-section" onClick={handleClick("Reservation")}>
          Reserve a table
        </ReservetableButton>
      </StyledFeatures>
    </StyledHeroSection>
  );
}

export default HeroSection;