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

export const Croffle = () => {
  const { scrollToTopPage } = React.useContext(authContext);
  const croffle = menudata.menu.find((menu) => menu.category === "Food" && menu.items[1].name === "Croffle");
  if (!croffle) {
    return null;
  }
  return (
    <>
      <MenuCategory id='Menu-page'>
        {croffle.items[1].name}
        <Link href="/content/pages/menu">
          <BackButtontoMain onClick={scrollToTopPage}>
            <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
          </BackButtontoMain>
        </Link>
      </MenuCategory>
      <MenuCategoryGroup>
        {croffle.items[1].list.map((item, index) => (
          <MenuItemGroup key={index}>
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
    </>
  )
}
