'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Contact,
  Copyright,
  FDlogo,
  FootWrapper,
  Footer,
  OpenHours,
  SocialMedia,
  VisitSosmed
} from "./styled_footer";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: info@littlelemon.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/F4YY",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rikiwendri/",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/fays.dalgona",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
];

const FootNav = () => {
  return (
    <Footer>
      <FootWrapper>
        <VisitSosmed>
          <p>Visit our social media:</p>
          <SocialMedia>
            {socials.map(({icon, url}) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={icon} size="xl" key={url} />
              </a>
            ))}
          </SocialMedia>
        </VisitSosmed>
        <Contact>
          <h1>Contact:</h1>
          <p>Store: Caringin, Bogor, West Java - Indonesia -</p>
          <p>Phone Number: 0857-73436024</p>
          <p>e-mail: info@faysdalgona.com</p>
        </Contact>
        <OpenHours>
          <h2>Open hours:</h2>
          <p>Monday-Sunday: 10:00 - 20:00</p>
          <p>Eid Fitri: Close</p>
        </OpenHours>
      </FootWrapper>
      <Copyright>
        <FDlogo src={`/images/FooterFD.png`} alt="LL_Footer" width={100} height={100}/>
        <p>© 2023</p>
      </Copyright>
    </Footer>
  );
};
export default FootNav;
