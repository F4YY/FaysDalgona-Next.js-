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

export const MieNyemek = () => {
  const { scrollToTop } = React.useContext(authContext);
  const mieNyemek = menudata.menu.find((menu) => menu.category === "Food" && menu.items[0].name === "Mie Nyemek");
  if (!mieNyemek) {
    return null;
  }
  return (
    <>
      <MenuCategory id={`${mieNyemek.items[0].title}-section`}>
        {mieNyemek.items[0].name}
        <Link href="/content/pages/menu">
          <BackButtontoMain>
            <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
          </BackButtontoMain>
        </Link>
      </MenuCategory>
      <MenuCategoryGroup>
        {mieNyemek.items[0].list.map((item) => (
          <MenuItemGroup key={item.name}>
            <Link href={item.link}>
              <MenuItemImage
                src={require(`../../../../../images/${item.image}`)}
                alt={item.name}
                onClick={scrollToTop}
              />
            </Link>
            <MenuItemText onClick={scrollToTop}>
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
