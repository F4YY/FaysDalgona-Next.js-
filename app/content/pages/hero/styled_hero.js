import Image from "next/image";
import styled from "styled-components";

export const StyledHeroSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(245, 245, 245, .8);
`
export const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 5rem 1rem;
  @media (max-width: 991px) {
    padding: 6.5rem 2.5rem 2rem;
  }
  @media (max-width: 640px) {
    padding: 5rem 1.5rem 2rem;
  }
`
export const FDtext = styled.h1`
  font-size: 8rem;
  font-family: var(--FDtext);
  line-height: 11rem;
  background: linear-gradient(45deg, var(--darkred), var(--red), var(--darkorange), var(--orange));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin:0;
  @media (max-width: 991px) {
    font-size: 5rem;
    line-height: 8rem;
  }
  @media (max-width: 640px) {
    font-size: 4rem;
    line-height: 5.5rem;
  }
`
export const FDindo = styled.h3`
  font-size: 3rem;
  font-weight: var(--medium);
  color: var(--darkorange);
  margin:0;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
export const FDdesc = styled.p`
  font-size: 1.2rem;
  font-weight: var(--regular);
  line-height: 2rem;
  color: var(--darkorange);
  width: 52%;
  margin: 2rem 0;
  @media (max-width: 991px) {
    font-size: .9rem;
    line-height: 1.6rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 auto 1.5rem;
  }
`
export const FDimage = styled(Image)`
  position: absolute;
  top: 7%;
  right: 5%;
  width: 40%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  aspect-ratio: 1/1;
  box-shadow: -5px 5px 3px rgba(128, 128, 128, 0.4);
  @media (max-width: 640px) {
    position: inherit;
    width: 100%;
    margin: 1.5rem 0;
  }
`
export const ReservetableButton = styled.a`
  width: fit-content;
  color: var(--darkorange);
  font-size: 1.1rem;
  font-weight: var(--bold);
  text-decoration: none;
  border: 2px outset var(--darkorange);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: var(--darkorange);
    border: 2px inset var(--darkorange);
  }
`
