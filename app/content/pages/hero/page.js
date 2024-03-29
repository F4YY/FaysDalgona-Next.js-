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
import { useContext } from 'react';
import AuthContext from '../../../context/authContext';
import Link from 'next/link';

const HeroSection = () => {
  const { scrollToTopPage } = useContext(AuthContext);
  return (
    <StyledHeroSection id="Home-page">
      <StyledFeatures>
        <FDtext>Fay's Dalgona</FDtext>
        <FDindo>Indonesia</FDindo>
        <FDimage
          src={`/images/FD_homepage.jpg`}
          alt="homepage"
          width={300}
          height={300}
          priority
        />
        <FDdesc>
          Fay's Dalgona offers you happiness and glory by serving tasty authentic Dalgona drinks. Explore our selection of 10 different flavors of Dalgona that can sweeten your every day. Try them all and experience the complete feeling of happiness.
          Additionally, we also serve delicious food options such as Mie Nyemek, Croffle Original, and Sate Bakso Seafood, perfect to accompany your Dalgona experience.
        </FDdesc>
        <Link href='/content/pages/reserve-table'>
          <ReservetableButton onClick={scrollToTopPage}>
            Reserve a table
          </ReservetableButton>
        </Link>
      </StyledFeatures>
    </StyledHeroSection>
  );
}

export default HeroSection;