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

const Testimonials = () => {
  const scrollRef = React.useRef(null);
  const [testi, setTesti] = React.useState([]);

React.useEffect(() => {
  fetch('https://fays-dalgona.onrender.com/Testimonials?star_rating_gte=4&_sort=id&_order=desc')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTesti(data);
    });
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
    <h1
      id="Testimonials-page"
    >
      Testimonials
    </h1>
    <Testifeeds ref={scrollRef}>
      {testi.slice(0, 5).map((feedback, index) => (
        <Testicard key={index}>
          <TestiProfpicName>
            <Profpic src={feedback.prof_pic.includes('http') ? feedback.prof_pic : `/images/${feedback.prof_pic}`} width={70} height={70} alt={feedback.name} />
            <p>{feedback.name}</p>
          </TestiProfpicName>
          <MenuAndRating>
            <MenuPicName>
              <Link href={`/content/pages/menu/productcategory/${feedback.menu_category.replace(/\s/g, '')}/${feedback.menu_name.replace(/\s/g, '')}`} width='20%'>
                <Menupic
                  src={`/images/${feedback.menu_pic}`}
                  alt={feedback.menu_name}
                  width={70}
                  height={70}
                />
              </Link>
              <MenuNameRating>
                <Link href={`/content/pages/menu/productcategory/${feedback.menu_category.replace(/\s/g, '')}/${feedback.menu_name.replace(/\s/g, '')}`}>
                  <p>{feedback.menu_name}</p>
                </Link>
                <StarRating>
                  {renderStarRating(parseInt(feedback.star_rating))}
                </StarRating>
              </MenuNameRating>
            </MenuPicName>
            <h4>
              <LeftQuote/>
                {feedback.review}
              <RightQuote/>
            </h4>
          </MenuAndRating>
        </Testicard>
      ))}
    </Testifeeds>
    <HStack display='flex' style={{width: '100%', justifyContent: 'center', marginBottom: '2rem'}}>
      {showLeftChevron && (
      <LeftChevronTesti onClick={scrollToLeft}>
        <FontAwesomeIcon
          icon={faChevronLeft}
        />
      </LeftChevronTesti>
      )}
      {showRightChevron && (
      <RightChevronTesti onClick={scrollToRight}>
        <FontAwesomeIcon
          icon={faChevronRight}
        />
      </RightChevronTesti>
      )}
    </HStack>
  </Testipage>
  );
}
export default Testimonials;