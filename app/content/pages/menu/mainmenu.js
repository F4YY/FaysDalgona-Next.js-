'use client'
import React from "react";
import menudata from "../../../database/menu.json";
import {
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText,
} from "./styled_menu";
import Link from 'next/link';
import authContext from "../../../context/authContext";

const MainMenu = () => {
  const { scrollToTopPage } = React.useContext(authContext);
  return (
    <div id="Menu-page">
      {menudata.menu.map((menu, menuIndex) => (
        <React.Fragment key={menuIndex}>
          <MenuCategory>{menu.category}</MenuCategory>
          <MenuCategoryGroup>
            {menu.items.map((item, itemIndex) => (
              <MenuItemGroup key={itemIndex}>
                <Link href={item.link}>
                  <MenuItemImage
                    src={`/images/${item.imageUrl}`}
                    alt={item.name}
                    width={112}
                    height={112}
                    onClick={scrollToTopPage}
                  />
                </Link>
                <MenuItemText key={itemIndex} onClick={scrollToTopPage}>
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </MenuItemText>
              </MenuItemGroup>
            ))}
          </MenuCategoryGroup>
        </React.Fragment>
      ))}
    </div>
  )
}
export default MainMenu;
