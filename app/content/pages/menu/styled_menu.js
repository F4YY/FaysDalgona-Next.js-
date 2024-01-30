import Image from "next/image";
import { Alert } from "@chakra-ui/react";
import { faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes, css } from "styled-components";

//For Main Menu:

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(245, 245, 245, .7);
  backdrop-filter: blur(5px);
  margin: 0 auto 4rem;
  @media (max-width: 991px) {
    margin: 0 auto 1rem;
  }
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--Main-font);
  margin: 0 20px 20px;

  @media (max-width: 991px) {
    align-items: stretch;
    margin: 20px 20px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Logo = styled(Image)`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 60px;
  overflow: hidden;
`;

export const MenuItem = styled.h2`
  color: var(--darkred);
  font-weight: (--reguler);
  line-height: 105%;
  letter-spacing: .1rem;
  cursor: pointer;
  &:hover {
    color: var(--orange);
  }
`;

export const MenuItemList = styled.h2`
  color: var(--darkblue);
  font-weight: (--regular);
  line-height: 105%;
  letter-spacing: .03rem;
  cursor: pointer;
  &:hover {
    color: var(--red);
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 991px) {
    justify-content: flex-end;
  }
`;

export const FindStore = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const LocationIcon = styled(Image)`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 32px;
  overflow: hidden;
  cursor: pointer;
`;

export const LocationText = styled.div`
  color: var(--Very-dark-grayish-blue);
  line-height: 105%;
  letter-spacing: 0.16px;
  white-space: nowrap;
  cursor: pointer;
`;

export const SignInButton = styled.div`
  color: var(--Very-dark-grayish-blue);
  text-align: center;
  line-height: 84%;
  align-self: stretch;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid var(--Very-dark-grayish-blue);
  width: 80px;
  max-width: 100%;
  padding: 7px 10px;
  cursor: pointer;
  &:hover {
    color: var(--Light-grayish-blue);
    background: var(--Very-dark-grayish-blue);
  }
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 991px) {
    white-space: initial;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const JoinButton = styled.div`
  color: var(--Light-grayish-blue);
  text-align: center;
  line-height: 84%;
  letter-spacing: 0.16px;
  align-self: stretch;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #963F01;
  background: var(--bg_joinbutton);
  width: 102px;
  max-width: 100%;
  padding: 7px 10px;
  cursor: pointer;
  &:hover {
    color: #D15B05;
    border: 1px solid #D15B05;
    background: var(--Light-grayish-blue);
  }
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 991px) {
    white-space: initial;
    flex-grow: 1;
    margin: auto;
  }
`;

export const AuxiliaryNavigation = styled.div`
  display: flex;
  border-radius: 0.5rem;
  border: 2px solid var(--darkred);
  padding: 17px 20px;
  margin: 2rem 0 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const AuxNavList = styled.ul`
  display: flex;
  font-size: 1rem;
  font-weight: var(--medium);
  justify-content: space-between;
  gap: 40px;
  margin: 0 0 0 40px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  margin: 40px auto 50px;

  @media (max-width: 991px) {
    width: 100%;
    margin: 0 auto 50px;
  }

  @media (max-width: 640px) {
    flex-direction: row;
    margin: 0 auto 50px;
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  margin: 12px 0 0 60px;

  @media (max-width: 991px) {
    margin: 40px 20px 0;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const MenuTitle = styled.div`
  color: var(--darkblue);
  font-size: 1.2rem;
  font-weight: var(--bold);
  line-height: 109.61%;
  letter-spacing: 0.04rem;
  align-self: start;
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(7%);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(7%);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const RightMenu = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 70%;
    margin: 30px 20px 50px;
  }
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const MenuHeader = styled.div`
  color: var(--white);
  font-size: 1.35rem;
  font-weight: var(--bold);
  line-height: 121.19%;
  letter-spacing: .2rem;
  align-self: start;
  width: 950px;
  align-items: flex-start;
  border-radius: 10px 0px 0px 10px;
  background: linear-gradient(180deg,rgba(214, 192, 0, 0.9) 0%,rgba(184, 165, 0, 0.9) 100%);
  max-width: 100%;
  padding: 7px 20px;

  @media (max-width: 991px) {
    padding-right: 10px;
  }
`;
export const MenuCategoryGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 38px;
  row-gap: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  padding: 0 0 20px;
  margin: 20px 0 0;
  @media (max-width: 991px) {
    row-gap: 30px;
  }
`
export const MenuCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--darkblue);
  font-size: 1.2rem;
  font-weight: var(--bold);
  line-height: 138.46%;
  letter-spacing: 0.04rem;
  margin: 30px 0 0;
`;

export const BackButtontoMain = styled.button`
  display: none;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.24);
  align-items: center;
  margin: 0;
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: linear-gradient(
      90deg, rgba(150, 89, 6, 0.9) 0%, rgba(200, 63, 1, 0.9) 100%
    )
  }
  &:active {
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 640px) {
    display: flex;
    font-size: .9rem;
  }
`;

export const MenuItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 235px;
  gap: 10px;
`;

export const MenuItemImage = styled(Image)`
  max-width: 112px;
  border-radius: 20px;
  object-fit: cover;
  aspect-ratio: 1;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  animation: ${fadeInLeft} 0.7s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 991px) {
    max-width: 100px;
  }
`;

export const MenuItemText = styled.h2`
  color: var(--darkblue);
  font-weight: var(--regular);
  line-height: 142.5%;
  letter-spacing: 0.03rem;
  align-self: center;
  width: auto;
  cursor: pointer;
  animation: ${fadeInLeft} 1s ease-in-out;
  &:hover {
    color: var(--red);
  }
`;

//For Product Detail:

export const ProductDetail = styled.div`
  position: relative;
  z-index: 0;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  pointer-events: ${({ rateMenu, showAlert }) => (rateMenu || showAlert ? 'none' : 'auto')};
  filter: brightness(${({ rateMenu, showAlert }) => (rateMenu || showAlert ? '0.5' : '1')});
`;

export const PathAndBackButton = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px;
  @media (max-width: 991px) {
    margin: 20px 20px;
  }
`;

export const Path = styled.div`
  display: flex;
  gap: 3px;
  padding: 0 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding: 0;
  }
`;

export const MenuText = styled.div`
  color: #767676;
  letter-spacing: 0.16px;
  align-self: stretch;
  font: 500 20px/105% Barlow, sans-serif;
  cursor: pointer;
  &:hover {
    color: #D15B05;
  }
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const Slash = styled.div`
  color: #767676;
  letter-spacing: 0.16px;
  align-self: stretch;
  font: 500 20px/105% Barlow, sans-serif;
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
export const DrinkText = styled.div`
  color: #767676;
  letter-spacing: 0.16px;
  font: 500 20px/105% Barlow, sans-serif;
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
export const CategoryText = styled.div`
  color: #767676;
  letter-spacing: 0.16px;
  font: 500 20px/105% Barlow, sans-serif;
  cursor:pointer;
  &:hover {
    color: #D15B05;
  }
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const ItemText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.16px;
  align-self: stretch;
  max-width: 305px;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 20px/105% Barlow, sans-serif;
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.24);
  align-items: center;
  margin: 0;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: linear-gradient(
      90deg, rgba(150, 89, 6, 0.9) 0%, rgba(200, 63, 1, 0.9) 100%
    )
  }
  &:active {
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 991px) {
    font-size: .95rem;
  }
`;

export const ProductHero = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background: ${props => {
    return props.$background;
  }};
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Img = styled(Image)`
  object-fit: cover;
  object-position: center;
  width: 30%;
  height: auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media (max-width: 991px) {
    min-width: 40%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-around;
  margin: 20px 0;
  @media (max-width: 991px) {
    width: 45%;
  }
  @media (max-width: 640px) {
    width: 90%;
    margin: 30px 0;
  }
`;

export const ItemName = styled.div`
  color: #fff;
  letter-spacing: 0.16px;
  align-self: start;
  max-width: 100%;
  font: 600 36px/129% Barlow Semi Condensed, -apple-system, Roboto, Helvetica,
    sans-serif;
  margin: 0 0 10px;
  @media (max-width: 991px) {
    font-size: 1.4rem;
  }
`;

export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  color: #aeb0b0;
  h2{
    color: rgba(150, 63, 1, 0.9);
    border: 1px solid gold;
    border-radius: 6px;
    font-family: -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 1rem;
    background-color: #F8FB68;
    cursor: pointer;
    padding: 3px 6px;
    margin: 6px 0;
    &:hover {
      color: darkorange;
      border: 1px solid darkorange;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const StarsReview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`;

export const Rating = styled.div`
  display: flex;
  width: auto;
  color: #aeb0b0;
  border: 1px solid #aeb0b0;
  border-radius: 6px;
  padding: 3px 6px;
  margin: 6px 0;
`;

export const TextReview = styled.p`
`

export const DetailDesc = styled.div`
  color: rgba(255, 243, 220, 0.67);
  letter-spacing: 0.16px;
  margin-top: 39px;
  font: 400 20px/166.25% Barlow Semi Condensed, -apple-system, Roboto,
    Helvetica, sans-serif;
  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

export const Calory = styled.div`
  color: rgba(255, 243, 220, 0.67);
  letter-spacing: 0.16px;
  margin-top: 66px;
  font: 400 14px/150% Barlow Semi Condensed, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

export const ProductInfoOrder = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: space-evenly;
  margin: 40px 0;
`;

export const SizeAndOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const SizeText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.16px;
  font: 400 22px/150% Barlow, sans-serif;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 1.2rem;
  }
`;

export const SizeDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  h3{
    color: rgba(0, 0, 0, 0.58);
    line-height: 1.8rem;
  }
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const ButtonOrder = styled.a`
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(203, 89, 6, 0.9) 0%,
    rgba(150, 63, 1, 0.9) 100%
  );
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.24);
  align-self: center;
  display: flex;
  margin: 50px 0;
  flex-direction: column;
  gap: 0px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      90deg, rgba(150, 89, 6, 0.9) 0%, rgba(200, 63, 1, 0.9) 100%
    )
  }
  &:active {
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const OrderNowText = styled.div`
  color: #fff;
  text-align: center;
  align-self: center;
  font: 500 32px/71.25% Barlow Semi Condensed, -apple-system, Roboto,
    Helvetica, sans-serif;
  @media (max-width: 991px) {
    font-size: 1.3rem;
  }
`;

export const RatingStar = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: auto;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E3E3E1;
  border-radius: 1rem;
  padding: 10px;
  margin: 20px 0;
  p{
    color: rgba(0, 0, 0, 0.67);
    font-family: -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 1rem;
    text-align: center;
    @media (max-width: 991px) {
      font-size: 1rem;
    }
  }
  .close{
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    cursor: pointer;
    color: darkslategrey;
    font-size: 1.5rem;
  }
  @media (max-width: 640px) {
    width: 95%;
  }
`;

export const RatingMenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: .7rem;
  margin: 10px 0;
`;

export const RatingImg = styled(Image)`
  width: 10%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const RatingItemName = styled.div`
  color: rgba(0, 0, 0, 0.57);
  font-size: 1rem;
  text-align: center;
`;

export const FeedbackArea = styled.textarea.attrs((props) => ({
  placeholder: 'Leave your review here...',
  required: props.$isrequired ? true : undefined,
}))`
  display: flex;
  width: 100%;
  min-height: 5rem;
  color: darkslategrey;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 8px 10px;
  &:invalid {
    border-color: red;
  }
`;

export const YellowStars = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: center;
  margin: 10px 0 15px;
  .star{
    width: 2rem;
    height: auto;
    margin: 0 5px;
  }
`;

export const StarIcon = styled(FontAwesomeIcon).attrs({
  icon: faStar,
})`
  width: 2rem;
  height: auto;
  margin: 0 5px;
`;

export const SubmitRating = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  background: linear-gradient(
    180deg, darkgrey 0%, grey 100%
  );
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  padding: 5px;
  margin: 15px auto;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  &:hover {
    color: darkcyan;
    background: linear-gradient(
      180deg,
      rgba(197, 208, 205, 1) 0%,
      rgba(151, 183, 174, 0.9) 100%
    )
  }
  &:active {
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }
`;

export const Topping = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 90%;
    margin: 0 0 40px;
  }
`;

export const ToppingText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.16px;
  font: 400 24px/150% Barlow, sans-serif;
  @media (max-width: 991px) {
    font-size: 1.2rem;
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`;

export const SpicyText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.16px;
  font: 400 24px/150% Barlow, sans-serif;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 1.2rem;
  }
`;

export const ToppingList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px 0;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0px;
  }
`;

export const ToppingImg = styled(Image)`
  object-fit: cover;
  object-position: center;
  width: 20%;
  height: auto;
  border-radius: 10px;
`;

export const SpicyImg = styled(Image)`
  object-fit: cover;
  object-position: center;
  width: auto;
  height: auto;
  border-radius: 10px;
`;

export const ToppingDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToppingName = styled.div`
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.16px;
  font: 400 19px/150% Arial, sans-serif;
  @media (max-width: 991px) {
    font-size: .9rem;
  }
  @media (max-width: 640px) {
    margin: 8px 0 0;
  }
`;

export const ToppingDetailDesc = styled.div`
  color: rgba(0, 0, 0, 0.58);
  letter-spacing: 0.16px;
  margin-top: 8px;
  font: 400 14px/150% Arial, sans-serif;
  @media (max-width: 991px) {
    font-size: .8rem;
  }
`;

export const ToppingList2 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 640px) {
    gap: 0px;
  }
`;

export const Img3 = styled(Image)`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 10%;
  overflow: hidden;
  flex-grow: 0;

  @media (max-width: 991px) {
    margin-top: 26px;
    width: 40%;
    flex-grow: 0;
  }

  @media (max-width: 640px) {
    width: 50%;
  }
`;

export const ErrorAlert = styled(Alert).attrs({
  status: 'error',
  position: 'fixed',
  width: "",
})`
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  width: 40%;
  min-height: 40%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 60%;
    min-height: 40%;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    width: 95%;
    min-height: 30%;
  }
`
export const NotifAlert = styled(ErrorAlert).attrs({
  status: 'success'
})``;

export const AlertWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const AlertCloseButton = styled(FontAwesomeIcon).attrs({
  icon: faClose,
  size: 'lg',
})`
  position: absolute;
  top: -5px;
  right: 0;
  color: darkslategray;
  font-size: 1.5rem;
  cursor: pointer;
`
export const RatingCloseButton = styled(AlertCloseButton)`
  top: 8px;
  right: 12px;
`