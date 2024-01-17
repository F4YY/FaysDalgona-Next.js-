'use client'
import React from "react";
import menudata from "../../../../../database/menu.json";
import {
  BackButtontoMain,
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText,
} from "../../styled_menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import authContext from "../../../../../context/authContext";

const DalgonaIced = () => {
  const { scrollToTopPage } = React.useContext(authContext);
  const dalgonaIced = menudata.menu.find((menu) => menu.category === "Drinks" && menu.items[0].name === "Dalgona Iced");
  if (!dalgonaIced) {
    return null;
  }
  return (
    <>
      <MenuCategory id='Menu-page'>
        {dalgonaIced.items[0].name}
        <Link href="/content/pages/menu">
          <BackButtontoMain>
            <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
          </BackButtontoMain>
        </Link>
      </MenuCategory>
      <MenuCategoryGroup>
        {dalgonaIced.items[0].list.map((item) => (
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
export default DalgonaIced;
