import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

export const Testipage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(255, 204, 144, 0.6);
  backdrop-filter: blur(1px);
  gap: 1rem;
  padding: 0 40px;
  margin: 0 auto 40px;
  h1{
    font-size: 2.7rem;
    font-weight: var(--bold);
    background: linear-gradient(45deg, var(--darkorange), var(--darkred));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.1rem;
    margin: 40px 0;
    @media (max-width: 991px) {
      font-size: 30px;
      margin: 20px 0;
    }
    @media (max-width: 640px) {
      font-size: 24px;
    }
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  @media (max-width: 640px) {
    padding: 0 10px;
  }
`;

export const Testifeeds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: scroll;
  gap: 2rem;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Testicard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 500px;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-image: linear-gradient(135deg, rgba(139, 0, 0, 0.7), rgba(255, 140, 0, 0.7)), url('/_next/static/media/bg-pattern-intro-desktop.a96b9a21.svg');
  backdrop-filter: blur(5px);
  box-shadow: 3px 10px 10px 5px rgba(0, 0, 0, 0.5);
  q{
    font-size:2em;
    text-align:center;
    color: var(--white);
    margin: 0 1rem;
  }
  @media (max-width: 991px) {
    min-height: auto;
  }
`
export const TestiProfpicName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: auto;
  border-radius: 3rem;
  background-color: var(--white);
  p{
    font-size: 1.1rem;
    font-weight: var(--medium);
    color: var(--darkorange);
    padding: 0 .5rem 0 0;
  }
`;
export const Profpic = styled(Image)`
  display: flex;
  width: 100px;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  aspect-ratio: 1/1;
  padding: 0.3rem;
  @media (max-width: 991px) {
    width: 80px;
  }
`
export const MenuAndRating = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 320px;
  border-radius: 1rem;
  border: .3rem solid var(--orange);
  padding: .5rem 0;
  margin: .5rem 0 0;
  h4{
    font-size: 1.8rem;
    font-weight: var(--medium);
    text-align: center;
    color: var(--white);
    padding: .5rem .5rem;
    @media (max-width: 991px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
  }
`;
export const MenuPicName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: .5rem 1rem;
`;
export const Menupic = styled(Image)`
  display: flex;
  width: 70px;
  height: 70px;
  object-fit: cover;
  object-position: center;
  border-radius: 20%;
  aspect-ratio: 1/1;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    transition: all .3s ease-in-out;
  }
`
export const MenuNameRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .5rem;
  p{
    color: var(--white);
    font-weight: var(--regular);
    cursor: pointer;
    &:hover{
      color: bisque;
    }
  }
`;

export const StarsAreBlind = styled(FontAwesomeIcon).attrs({
  icon: faStar,
  size: 'xl'
})`
  color: #FFC107;
`
export const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: .5rem;
`
export const LeftQuote = styled(FontAwesomeIcon).attrs({
  icon: faQuoteLeft,
  size: 'lg',
})`
  color: var(--darkred);
  margin: 0 .5rem .5rem 0;
`
export const RightQuote = styled(FontAwesomeIcon).attrs({
  icon: faQuoteRight,
  size: 'lg',
})`
  color: var(--darkred);
  margin: 0 0 .5rem .5rem;
`