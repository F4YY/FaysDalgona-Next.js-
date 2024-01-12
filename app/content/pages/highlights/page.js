'use client'
import React from 'react';
import TopMenu from './topmenu';
import {
  HighlightContainer,
  HighlightHeading,
  LeftChevron,
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

const Highlight = () => {
  const scrollRef = React.useRef(null);
  const [showLeftChevron, setShowLeftChevron] = React.useState(false);
  const [showRightChevron, setShowRightChevron] = React.useState(true);
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

  const { scrollToTop } = useContext(AuthContext);
  return (
    <HighlightContainer id="Menu-section">
      <ThisWeekandOrder>
        <HighlightHeading>
            This Weeks Specials!
        </HighlightHeading>
        <OrderButton href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
          Order Online
        </OrderButton>
      </ThisWeekandOrder>
      <SpecialMenu ref={scrollRef}>
        {showLeftChevron && (
        <LeftChevron onClick={scrollToLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="faChevronLeft"
          />
        </LeftChevron>
        )}
        {showRightChevron && (
        <RightChevron onClick={scrollToRight}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="faChevronRight"
          />
        </RightChevron>
        )}
        <SpecialItem>
          <Link href='/content/pages/menu/productcategory/DalgonaIced/DalgonaChocoSilverqueen'>
            <StyledImage
              src={require('../../../images/Dalg_ChocSilv.jpg')}
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
              src={require('../../../images/FD_Croffle.jpg')}
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
              src={require('../../../images/mienyemek_baksoseafood.jpg')}
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
    </HighlightContainer>
  );
}

  export default Highlight;