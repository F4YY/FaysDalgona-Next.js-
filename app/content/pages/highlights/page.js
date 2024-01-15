'use client'
import React from 'react';
import TopMenu from './topmenu';
import {
  HighlightContainer,
  HighlightHeading,
  LeftChevron,
  MenuWrapper,
  OrderButton,
  RightChevron,
  SpecialItem,
  SpecialMenu,
  StyledImage,
  ThisWeekandOrder
} from './styled_highlight';
import { useContext } from 'react';
import AuthContext from '../../../context/authContext';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { HStack, VStack } from '@chakra-ui/react';

const Highlight = () => {
  const scrollRef = React.useRef(null);
  const {
    scrollToTop,
    showLeftChevron,
    showRightChevron,
    setShowLeftChevron,
    setShowRightChevron
  } = useContext(AuthContext);
  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        setShowLeftChevron(container.scrollLeft > 0);
        setShowRightChevron(
          container.scrollLeft + container.clientWidth < container.scrollWidth
        );
      }
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  const scrollToLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollToRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <HighlightContainer id="Highlight-page">
      <ThisWeekandOrder>
        <HighlightHeading>
            This Weeks Specials!
        </HighlightHeading>
        <OrderButton href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
          Order Online
        </OrderButton>
      </ThisWeekandOrder>
      <MenuWrapper>
        <SpecialMenu ref={scrollRef}>
          <SpecialItem>
            <Link href='/content/pages/menu/productcategory/DalgonaIced/DalgonaChocoSilverqueen'>
              <StyledImage
                src={require("../../../images/Dalg_ChocSilv.jpg")}
                alt="DalgChocSilv"
                onClick={scrollToTop}
              />
            </Link>
            <TopMenu
              title="Dalgona Choco Silverqueen"
              subtitle="Order a delivery"
              desc='Dalgona drink with chocolate SilverQueen flavor mixed with brown sugar and boba pearl.'
              price="IDR 15999"
            />
          </SpecialItem>
          <SpecialItem>
            <Link href='/content/pages/menu/productcategory/Croffle/CroffleOriginal'>
              <StyledImage
                src={require("../../../images/FD_Croffle.jpg")}
                alt="Croffle"
                onClick={scrollToTop}
              />
            </Link>
            <TopMenu
              title='Croffle Original'
              subtitle="Order a delivery"
              desc='A delightful fusion of croissants and waffles, created by cooking croissant dough in a waffle iron.'
              price="IDR 10999"
            />
          </SpecialItem>
          <SpecialItem>
            <Link href='/content/pages/menu/productcategory/MieNyemek/MieNyemekBaksoSeafood'>
              <StyledImage
                src={require("../../../images/mienyemek_baksoseafood.jpg")}
                alt="Mie Nyemek Bakso Seafood"
                onClick={scrollToTop}
              />
            </Link>
            <TopMenu
              title='Mie Nyemek Bakso Seafood'
              subtitle="Order a delivery"
              desc='Indonesian tasty noodles mixed with vegetables, chicken egg, seafood meatballs.'
              price="IDR 17999"
            />
          </SpecialItem>
        </SpecialMenu>
        <HStack display='flex' style={{width: '100%', justifyContent: 'center', marginBottom: '2rem'}}>
          {showLeftChevron && (
          <LeftChevron onClick={scrollToLeft}>
            <FontAwesomeIcon
              icon={faChevronLeft}
            />
          </LeftChevron>
          )}
          {showRightChevron && (
          <RightChevron onClick={scrollToRight}>
            <FontAwesomeIcon
              icon={faChevronRight}
            />
          </RightChevron>
          )}
        </HStack>
      </MenuWrapper>
    </HighlightContainer>
  );
}

  export default Highlight;