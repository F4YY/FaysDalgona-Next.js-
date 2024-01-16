'use client'
import React from 'react';
import {
  LeftQuote,
  MenuAndRating,
  MenuNameRating,
  MenuPicName,
  Menupic,
  MenupicWrapper,
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
import { MdLink } from 'react-icons/md';

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
    })
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

const handleClick = (anchor) => {
  navigate(anchor);
};

return (
  <Testipage>
    <h1
      id="Testimonials-page"
      ref={scrollRef}
    >
      Testimonials
    </h1>
    <Testifeeds>
      {testi.slice(0, 5).map((feedback, index) => (
        <Testicard key={index}>
          <TestiProfpicName>
            <Profpic src={feedback.prof_pic.includes('http') ? feedback.prof_pic : `/app/images/${feedback.prof_pic}`} alt={feedback.name} priority/>
            <p>{feedback.name}</p>
          </TestiProfpicName>
          <MenuAndRating>
            <MenuPicName>
              <Link href={`/content/pages/menu/productcategory/${feedback.menu_category.replace(/\s/g, '')}/${feedback.menu_name.replace(/\s/g, '')}`} width='20%'>
                <Menupic
                  src={`/app/images/${feedback.menu_pic}`}
                  alt={feedback.menu_name}
                  priority
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
  </Testipage>
  );
}
export default Testimonials;