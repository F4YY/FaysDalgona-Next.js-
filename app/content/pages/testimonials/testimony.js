'use client'
import React from 'react';
import {
  LeftQuote,
  MenuAndRating,
  MenuNameRating,
  MenuPicName,
  Menupic,
  Profpic,
  RightQuote,
  StarRating,
  StarsAreBlind,
  TestiProfpicName,
  Testicard,
  Testifeeds,
  Testipage
} from './styled_testi';
import Link from 'next/link';
import { HStack } from '@chakra-ui/react';
import { LeftChevronTesti, RightChevronTesti } from '../highlights/styled_highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from '../../../context/authContext';
import { useContext } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials({ testies }) {
  const scrollRef = React.useRef(null);

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

  const renderStarRating = (rating) => {
    const starIcons = [];
    for (let i = 0; i < rating; i++) {
      starIcons.push(
        <StarsAreBlind
          key={i}
        />
      );
    }
    return starIcons;
  };

  const {
    showLeftChevron,
    showRightChevron,
    setShowLeftChevron,
    setShowRightChevron
  } = useContext(AuthContext);

  const scrollToLeft = () => {
    scrollRef.current.scrollBy({
      left: -550,
      behavior: "smooth",
    });
  };

  const scrollToRight = () => {
    scrollRef.current.scrollBy({
      left: 550,
      behavior: "smooth",
    });
  };

  return (
    <Testipage>
      <h1 id="Testimonials-page">Testimonials</h1>
      <Testifeeds ref={scrollRef}>
        {testies.slice(0, 5).map((testi, index) => (
          <Testicard key={index}>
            <TestiProfpicName>
              <Profpic src={testi.prof_pic.includes('http') ? testi.prof_pic : `/images/${testi.prof_pic}`} width={70} height={70} alt={testi.name} />
              <p>{testi.name}</p>
            </TestiProfpicName>
            <MenuAndRating>
              <MenuPicName>
                <Link href={`/content/pages/menu/productcategory/${testi.menu_category.replace(/\s/g, '')}/${testi.menu_name.replace(/\s/g, '')}`} width='20%'>
                  <Menupic
                    src={`/images/${testi.menu_pic}`}
                    alt={testi.menu_name}
                    width={70}
                    height={70}
                  />
                </Link>
                <MenuNameRating>
                  <Link href={`/content/pages/menu/productcategory/${testi.menu_category.replace(/\s/g, '')}/${testi.menu_name.replace(/\s/g, '')}`}>
                    <p>{testi.menu_name}</p>
                  </Link>
                  <StarRating>
                    {renderStarRating(parseInt(testi.star_rating))}
                  </StarRating>
                </MenuNameRating>
              </MenuPicName>
              <h4>
                <LeftQuote/>
                  {testi.review}
                <RightQuote/>
              </h4>
            </MenuAndRating>
          </Testicard>
        ))}
      </Testifeeds>
      <HStack display='flex' style={{width: '100%', justifyContent: 'center', marginBottom: '2rem'}}>
        {showLeftChevron && (
          <LeftChevronTesti onClick={scrollToLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </LeftChevronTesti>
        )}
        {showRightChevron && (
          <RightChevronTesti onClick={scrollToRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </RightChevronTesti>
        )}
      </HStack>
    </Testipage>
  );
}

