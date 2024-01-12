import Image from "next/image";
import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: var(--white);
  background-color: rgba(31, 31, 31, .9);
  backdrop-filter: blur(5px);
  padding: 0 5rem 40px;
  @media (max-width: 991px) {
    padding: 0 2rem 40px;
  }
  @media (max-width: 640px) {
    min-height: auto;
    padding: 0 1rem 5rem;
  }
`;
export const AboutText = styled.h1`
  font-size: 2.7rem;
  font-weight: var(--bold);
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 20px 0 50px;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;
export const Hstackflexi = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  gap: 3rem;
  @media (max-width: 991px) {
    gap: 2rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const AboutPic = styled(Image)`
  display: flex;
  width: 40%;
  height:auto;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
  border-radius: 20px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
export const Vstack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 640px) {
    align-items: center;
  }
`;
export const TitleAndSub = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
export const Title = styled.h3`
  font-size: 3.3rem;
  font-family: var(--FDtext);
  font-weight: var(--medium);
  letter-spacing: 0.1rem;
  line-height: 2.3rem;
  color: var(--orange);
  @media (max-width: 991px) {
    font-size: 2.5rem;
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`;
export const Subtitle = styled.h4`
  font-size: 1.6rem;
  font-weight: var(--regular);
  letter-spacing: 0.1rem;
  color: var(--lightgrey);
  margin: .9rem 0 1.4rem;
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;
export const Aboutdesc = styled.p`
  font-size: 1.2rem;
  font-weight: var(--extralight);
  line-height: 1.9rem;
  letter-spacing: 0.1rem;
  color: var(--white);
  @media (max-width: 991px) {
    font-size: .82rem;
    line-height: 1.3rem;
  }
  @media (max-width: 640px) {
    font-size: .92rem;
    line-height: 1.6rem;
  }
`;
