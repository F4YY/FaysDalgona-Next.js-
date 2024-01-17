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
import { useContext } from 'react';
import AuthContext from '../../../../../context/authContext';

export const DalCro = () => {
  const { scrollToTopPage } = useContext(AuthContext);
  const dalCro = menudata.menu.find((menu) => menu.category === "Combo" && menu.items[0].name === "Simple DalCro");
  if (!dalCro) {
    return null;
  }
  return (
    <>
      <MenuCategory id='Menu-page'>
        {dalCro.items[0].name}
        <Link href="/content/pages/menu">
          <BackButtontoMain>
            <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
          </BackButtontoMain>
        </Link>
      </MenuCategory>
      <MenuCategoryGroup>
        {dalCro.items[0].list.map((item) => (
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
    </>
  )
}
