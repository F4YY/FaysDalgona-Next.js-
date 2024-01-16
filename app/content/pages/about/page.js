'use client'
import React from 'react';
import {
  AboutPic,
  AboutText,
  Aboutdesc,
  Hstackflexi,
  StyledAbout,
  Subtitle,
  Title,
  TitleAndSub,
  Vstack
} from './styled_about';

const About = () => (
  <StyledAbout id="About-page">
    <AboutText>
      About Us
    </AboutText>
    <Hstackflexi>
      <AboutPic
        src={`/images/FD_AboutUs.jpg`}
        alt='about us'
      />
      <Vstack>
        <TitleAndSub>
          <Title>
            Fay's Dalgona
          </Title>
          <Subtitle>
            Indonesia
          </Subtitle>
        </TitleAndSub>
        <Aboutdesc>
          The following Fay's Dalgona outlets, which we will refer to as "Volume 01, 02, 03, etc.", first started operating under the name Fay Thai Tea in early 2020, located in Caringin, Bogor. In March 2020, the Corona storm hit, but until now Fay Thai Tea has managed to survive amidst the pandemic situation and officially achieved break-even in August 2020. Now, we will expand our business by opening a new branch in South Bogor City, precisely in front of the Rancamaya housing complex, Bogor.
        </Aboutdesc>
      </Vstack>
    </Hstackflexi>
  </StyledAbout>
);

export default About;