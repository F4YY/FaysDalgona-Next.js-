'use client'
import React from 'react';
import { db } from '../../../../../../firebase.config';
import { collection, query, getDocs } from "firebase/firestore";
import menudata from "../../../../../../database/menu.json";
import {
  AlertCloseButton,
  AlertWrapper,
  BackButton,
  ButtonOrder,
  Calory,
  CategoryText,
  DetailDesc,
  DrinkText,
  ErrorAlert,
  FeedbackArea,
  Img,
  ItemName,
  ItemText,
  MenuText,
  NotifAlert,
  OrderNowText,
  Path,
  PathAndBackButton,
  ProductDesc,
  ProductDetail,
  ProductHero,
  ProductInfoOrder,
  Rating,
  RatingCloseButton,
  RatingImg,
  RatingItemName,
  RatingMenuWrap,
  RatingStar,
  RatingWrap,
  SizeAndOrder,
  SizeDesc,
  SizeText,
  Slash,
  StarIcon,
  StarsReview,
  SubmitRating,
  TextReview,
  Topping,
  ToppingDesc,
  ToppingDetailDesc,
  ToppingImg,
  ToppingList,
  ToppingName,
  ToppingText,
  YellowStars,
} from '../../../styled_menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { AlertDescription, AlertIcon, AlertTitle, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../../../../../../context/authContext';

const DalgonaTira = () => {
  const {
    scrollToTopPage,
    stars,
    rateMenu,
    setRateMenu,
    currentRating,
    setCurrentRating,
    hoverRating,
    setHoverRating,
    authReady,
    handleRateMenu,
    handleSubmit,
    showAlert,
    showNotif,
    setShowNotif,
    setShowAlert,
    isSubmitting,
    feedbackValue,
    setFeedbackValue,
    setMenuPic,
    setMenuCategory,
    setMenuName,
    user
} = useContext(AuthContext);

  const [isClickable, setIsClickable] = React.useState(true);
  const [feedbackTouched, setFeedbackTouched] = React.useState(false);

  React.useEffect(() => {
    if (showNotif) {
      const timer = setTimeout(() => {
        setShowNotif(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    async function getDataFromFirestore() {
      const testimonialsCollection = collection(db, 'testimonials');
      const q = query(testimonialsCollection);
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => doc.data());
      const matchingObject = data.find(obj => obj.name === user?.user_metadata.full_name && obj.menu_name === "Dalgona Tiramisu");
      if (matchingObject) {
        setIsClickable(false);
        console.log(user?.user_metadata.full_name);
      } else {
        setIsClickable(true);
      }
    }
    getDataFromFirestore().catch(error => {
      console.error("Error fetching Testimonials:", error);
    });
  }, [showNotif, setShowNotif, user?.user_metadata.full_name]);
  const props = menudata.menu.find((menu) => menu.category === "Drinks" && menu.items[0].name === "Dalgona Iced" && menu.items[0].list[9].name === "Dalgona Tiramisu");

  return (
    <>
    <ProductDetail
      id="Menu-page"
    >
      <PathAndBackButton>
        <Path>
          <Link href="/content/pages/menu">
            <MenuText onClick={scrollToTopPage}>Menu</MenuText>
          </Link>
          <Slash>/</Slash>
          <DrinkText>{props.category}</DrinkText>
          <Slash>/</Slash>
          <Link href='/content/pages/menu/productcategory/DalgonaIced'>
            <CategoryText onClick={scrollToTopPage}>
              {props.items[0].name}
            </CategoryText>
          </Link>
          <Slash>/</Slash>
          <ItemText>{props.items[0].list[9].name}</ItemText>
        </Path>
        <Link href="/content/pages/menu/productcategory/DalgonaIced">
          <BackButton onClick={scrollToTopPage}>
            <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
          </BackButton>
        </Link>
      </PathAndBackButton>
      <ProductHero $background={props.items[0].background}>
        <Img src={`/images/${props.items[0].list[9].image}`} alt={props.items[0].list[9].name} width={500} height={500}/>
        <ProductDesc>
          <ItemName>{props.items[0].list[9].name}</ItemName>
          <RatingWrap>
            <StarsReview>
              <Rating>
                {props.items[0].list[9].stars}★
              </Rating>
              <TextReview>
                {props.items[0].list[9].reviews}&nbsp;reviews
              </TextReview>
            </StarsReview>
            {authReady && (
              <h2
                onClick={handleRateMenu}
                style={!isClickable ? { pointerEvents: 'none', opacity: 0.5 } : null}
              >
                Rate this menu
              </h2>
            )}
          </RatingWrap>
          <DetailDesc>{props.items[0].list[9].description}</DetailDesc>
          <Calory>{props.items[0].list[9].calories}</Calory>
        </ProductDesc>
      </ProductHero>
      <ProductInfoOrder>
        <SizeAndOrder>
          <SizeText>Size options</SizeText>
          <SizeDesc>
            Size : Oval cup 16 oz
          </SizeDesc>
          <ButtonOrder href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
            <OrderNowText>Order Now</OrderNowText>
          </ButtonOrder>
        </SizeAndOrder>
        <Topping>
          <ToppingText>Add-ins Topping</ToppingText>
          <ToppingList>
            <ToppingImg src={`/images/lotus_bischoff.jpg`} alt='lotus bischoff' width={100} height={100}/>
            <ToppingDesc>
              <ToppingName>Lotus Biscoff Crumbles</ToppingName>
              <ToppingDetailDesc>
                cookie crumbs made from Lotus Biscoff cookies, known for their
                caramelized flavor and hint of cinnamon.
              </ToppingDetailDesc>
            </ToppingDesc>
          </ToppingList>
          <ToppingList>
            <ToppingImg src={`/images/Choco_crispyballs.jpg`} alt='choco crispy ball' width={100} height={100}/>
            <ToppingDesc>
              <ToppingName>Choco Crispy Balls</ToppingName>
              <ToppingDetailDesc>
                delicious bite-sized treats made from crispy rice cereal coated
                in rich chocolate
              </ToppingDetailDesc>
            </ToppingDesc>
          </ToppingList>
        </Topping>
      </ProductInfoOrder>
    </ProductDetail>
    {rateMenu && (
      <RatingStar>
        <RatingCloseButton
          onClick={() => {
            setRateMenu(false);
            setCurrentRating(0);
            setFeedbackValue('');
          }}
        />
        <p>Tell others what you think.</p>
        <RatingMenuWrap>
          <RatingImg src={`/images/Dalg_Tira.jpg`} alt={props.items[0].list[9].name} width={50} height={50}/>
          <RatingItemName>{props.items[0].list[9].name}</RatingItemName>
        </RatingMenuWrap>
        <YellowStars>
          {stars.map((_, index) => {
            return (
              <StarIcon
                key={index}
                color={(hoverRating || currentRating) > index ? "#ffc107" : "#C7C8B9"}
                onClick={() => {
                  setCurrentRating(index + 1)
                  setMenuPic('Dalg_Tira.jpg');
                  setMenuCategory(props.items[0].name);
                  setMenuName(props.items[0].list[9].name);
                }}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(undefined)}
              />
            );
          })}
        </YellowStars>
        <FeedbackArea
          value={feedbackValue}
          onChange={(event) => setFeedbackValue(event.target.value)}
          onBlur={() => setFeedbackTouched(true)}
          $isrequired={feedbackTouched}
        >
        </FeedbackArea>
        <HStack justify="flex-end">
          {(currentRating === 0 && feedbackTouched) && (
            <i
              style={{ display: "block", color: "red", fontSize: ".8rem", textAlign: "right", marginTop: ".15rem" }}
            >
              Please give star rating
            </i>
          )}
          {(feedbackValue.length < 1 && feedbackTouched) && (
            <i
              style={{ display: "block", color: "red", fontSize: ".8rem", textAlign: "right", marginTop: ".15rem" }}
            >
              Please give review
            </i>
          )}
        </HStack>
        <SubmitRating
          disabled={currentRating === 0 || feedbackValue.length <= 1}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </SubmitRating>
      </RatingStar>
    )}
    {showAlert && (
      <ErrorAlert>
        <AlertWrapper>
          <AlertCloseButton
            onClick={() => setShowAlert(false)}
          />
        </AlertWrapper>
        <AlertIcon />
        <AlertTitle>You're not logged in!</AlertTitle>
        <AlertDescription>Please login to rate a menu.</AlertDescription>
      </ErrorAlert>
    )}
    {showNotif && (
      <NotifAlert>
        <HStack m={2}>
          <AlertIcon />
          <AlertTitle>Thank you!</AlertTitle>
        </HStack>
        <AlertDescription>Your review has been submitted.</AlertDescription>
      </NotifAlert>
    )}
    </>
  )
}
export default DalgonaTira;
