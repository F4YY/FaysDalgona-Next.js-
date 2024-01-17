'use client'
import React from 'react';
import menudata from "../../../../../database/menu.json";
import {
  BackButtontoMain,
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText
} from '../../styled_menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import authContext from '../../../../../context/authContext';

const RegularIced = () => {
  const { scrollToTopPage } = React.useContext(authContext);
  const regularIced = menudata.menu.find((menu) => menu.category === "Drinks" && menu.items[1].name === "Regular Iced");
  if (!regularIced) {
    return null;
  }
  return (
    <div>
      <MenuCategory id='Menu-page'>
        {regularIced.items[1].name}
        <Link href="/content/pages/menu">
          <BackButtontoMain>
            <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
          </BackButtontoMain>
        </Link>
      </MenuCategory>
      <MenuCategoryGroup>
        {regularIced.items[1].list.map((item) => (
          <MenuItemGroup key={item.name}>
            <Link href={item.link}>
              <MenuItemImage
                src={`/images/${item.image}`}
                alt={item.name}
                width={200}
                height={200}
                onClick={scrollToTopPage}
              />
            </Link>
            <MenuItemText onClick={scrollToTopPage}>
              <Link href={item.link}>
                {item.name}
              </Link>
            </MenuItemText>
          </MenuItemGroup>
        ))}
      </MenuCategoryGroup>
    </div>
  )
}
export default RegularIced;
