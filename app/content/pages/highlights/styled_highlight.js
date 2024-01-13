import Image from 'next/image';
import styled from 'styled-components';

export const HighlightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color:rgba(255, 204, 144, 0.5);
`;

export const ThisWeekandOrder = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 5rem 2rem;
  @media (max-width: 991px) {
    margin: 20px 40px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    margin: 2rem auto;
  }
`;

export const HighlightHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: var(--medium);
  color: var(--darkorange);
  @media (max-width: 991px) {
    font-size: 1.8rem;
  }
`;

export const OrderButton = styled.a`
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
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const SpecialMenu = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  justify-content: space-around;
  align-items: flex-start;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  gap: 4rem;
  margin: 2rem 5rem;
  @media (max-width: 991px) {
    justify-content: flex-start;
    gap: 2rem;
    margin: 2rem 2rem 1.5rem;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    overflow: initial;
    gap: 3rem;
    margin: auto auto 4rem;
  }
`
export const SpecialItem = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  backdrop-filter: blur(15px);
  border-radius: 20px 20px 0 0;
  border: 1px solid var(--lightgrey);
  box-shadow: 4px 4px 4px var(--lightgrey);
  @media (max-width: 640px) {
    width: 95%;
  }
`;

export const LeftChevron = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--white);
  border: 1px solid var(--lightgrey);
  box-shadow: 4px 4px 4px var(--lightgrey);
  cursor: pointer;
  &:hover {
    opacity: 90%;
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
  @media (max-width: 991px) {
    display: flex;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const RightChevron = styled(LeftChevron)`
`;

export const StyledImage = styled(Image)`
  display: flex;
  width: 340px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px 20px 0 0;
  cursor: pointer;
  &:hover {
    opacity: 90%;
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const TopMenuDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  padding: 10px;
  min-height: 180px;
  @media (max-width: 640px) {
    width: auto;
  }
`
export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 5px 0;
  h3{
    font-size: 1.1rem;
    font-weight: var(--medium);
    color: var(--darkblue);
  }
  h4{
    font-size: 1rem;
    font-weight: var(--medium);
    color: var(--orange);
  }
`
export const MenuDescription = styled.p`
  font-size: .95rem;
  font-weight: var(--medium);
  color: var(--lightgrey);
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const OrderDelivery = styled.a`
  font-size: 1.3rem;
  font-weight: var(--bold);
  color: var(--darkgrey);
  cursor: pointer;
  &:hover {
    color: rgba(238,153,114,1);
  }
  &:active {
    transform: scale(0.98);
  }
`;
export const MotorcyleIcon = styled.a`
  display: flex;
  .faMotorcyle {
    width: 1.4rem;
    height: auto;
    cursor: pointer;
    &:hover {
      color: rgba(238,153,114,1);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`