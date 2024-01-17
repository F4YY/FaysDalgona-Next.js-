'use client'
import React from "react";
import menudata from "../../../../../database/menu.json";
import {
  AuxNavList,
  AuxiliaryNavigation,
  LeftMenu,
  MainContent,
  MenuHeader,
  MenuItem,
  MenuItemList,
  MenuSection,
  MenuTitle,
  RightMenu,
  Wrapper,
} from "../../styled_menu";
import { Combo123 } from "./combo123";
import Link from 'next/link';
import AuthContext from '../../../../../context/authContext';

export default function Combo_123() {
  const { scrollToTopPage } = React.useContext(AuthContext);
  return (
    <Wrapper>
      <AuxiliaryNavigation>
        <AuxNavList>
          <Link href='/content/pages/menu'>
            <MenuItem onClick={scrollToTopPage}>
              Menu
            </MenuItem>
          </Link>
          <MenuItem>Featured</MenuItem>
          <MenuItem>Previous</MenuItem>
          <MenuItem>Favorites</MenuItem>
        </AuxNavList>
      </AuxiliaryNavigation>
      <MainContent>
        <LeftMenu>
          {menudata.menu.map((menu, index) => (
            <MenuSection key={index}>
              <MenuTitle>
                {menu.category}
              </MenuTitle>
              {menu.items.map((item, index) => (
              <MenuItemList key={index} onClick={scrollToTopPage}>
                <Link href={item.link}>
                  {item.name}
                </Link>
              </MenuItemList>
              ))}
            </MenuSection>
          ))}
        </LeftMenu>
        <RightMenu>
          <MenuHeader id="Menu-page">
            Menu
          </MenuHeader>
          <Combo123 />
        </RightMenu>
      </MainContent>
    </Wrapper>
  );
}