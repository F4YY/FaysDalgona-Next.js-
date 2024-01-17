'use client'
import Link from "next/link";
import React ,{ useContext, useEffect, useRef } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineLogin, MdOutlineLogout, MdOutlineRestaurantMenu } from 'react-icons/md';
import { HStack, VStack } from "@chakra-ui/react";
import AuthContext from "../../context/authContext";
import {
  AnimatedBurgerButton,
  AnimatedSpoonForkButton,
  AnimatedWrappedMobileMenu,
  LoginButton,
  LogoutButton,
  MobileMenuButton,
  Overlayscreen,
  StyledImage,
  StyledLi,
  StyledLiMobile,
  StyledNavbar,
  StyledUl,
  StyledUlmobile,
  UserName,
  UserPicture,
} from "./styled_navbar";

const NavBar = () => {
  const NavBarRef = useRef(null);
  const {
    user,
    login,
    logout,
    authReady,
    // scrollToTopHomePage,
    // scrollToTopPage,
    scrollToTop,
    scrollToTopSubPage
  } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const NavBarElement = NavBarRef.current;
    if (!NavBarElement) {
      return;
      }
    if (prevScrollPos > currentScrollPos) {
      NavBarElement.style.transform = "translateY(0)";
      } else {
      NavBarElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
      window.addEventListener('scroll', handleScroll)

      return() => {
          window.removeEventListener('scroll', handleScroll)
      }
  },[]);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('Home');

  return (
    <StyledNavbar
      ref={NavBarRef}
      translateY="0"
    >
      <StyledImage
        src={`/images/FD_Header.png`}
        alt="FD_logo"
        width={65}
        height={65}
      />
      {authReady && (
        <StyledUl>
          <Link href="/">
            <StyledLi onClick={() => {setCurrentPage('Home'); scrollToTop('Home-page')}} $current={currentPage === 'Home'}>
              Home
            </StyledLi>
          </Link>
          <Link href="/content/pages/menu">
            <StyledLi onClick={() => {setCurrentPage('Menu'); scrollToTop('Menu-page')}} $current={currentPage === "Menu"}>
              Menu
            </StyledLi>
          </Link>
          <Link href='/'>
            <StyledLi onClick={() => {setCurrentPage('Highlight'); scrollToTopSubPage()}} $current={currentPage === 'Highlight'}>
              Order online
            </StyledLi>
          </Link>
          <Link href='/content/pages/testimonials'>
            <StyledLi onClick={() => {setCurrentPage('Testimonials'); scrollToTop('Testimonials-page')}} $current={currentPage === "Testimonials"}>
              Testimonials
            </StyledLi>
          </Link>
          <Link href='/content/pages/about'>
            <StyledLi onClick={() => {setCurrentPage('About'); scrollToTop('About-page')}} $current={currentPage === "About"}>
              About us
            </StyledLi>
          </Link>
          <Link href="/content/pages/reserve-table">
            <StyledLi onClick={() => {setCurrentPage('Reservation'); scrollToTop('Reservation-page')}} $current={currentPage === "Reservation"}>
              Reserve a table
            </StyledLi>
          </Link>
          {!user?(
            <LoginButton
              onClick={login}
            >
              <MdOutlineLogin/>&nbsp;Login/Sign Up
            </LoginButton>
            ) : (
            <VStack>
              <LogoutButton
                onClick={logout}
              >
                <MdOutlineLogout/>&nbsp;logout
              </LogoutButton>
              <HStack>
                <UserName>
                  Welcome&nbsp;<b>{user.user_metadata.full_name}</b>
                </UserName>
                {user.user_metadata.avatar_url ? (
                  <UserPicture
                    src={user.user_metadata.avatar_url}
                    alt="user"
                  />) : (
                  <UserPicture
                    src={`/images/avatar.jpg`}
                    alt="user"
                  />
                  )
                }
              </HStack>
            </VStack>
            )
          }
        </StyledUl>
      )}
      <AnimatedBurgerButton $toggleMenu={toggleMenu}>
        <GiHamburgerMenu
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }} />
      </AnimatedBurgerButton>
      <AnimatedSpoonForkButton $toggleMenu={toggleMenu}>
        <MdOutlineRestaurantMenu
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }} />
      </AnimatedSpoonForkButton>
      {toggleMenu ? (
        <>
        <Overlayscreen/>
        <AnimatedWrappedMobileMenu $toggleMenu={toggleMenu}>
          <StyledUlmobile>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Home');scrollToTop('Home-page');setToggleMenu(false)}} $current={currentPage === 'Home'}>
                  Home
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/menu'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Menu');scrollToTop('Menu-page');setToggleMenu(false)}} $current={currentPage === 'Menu'}>
                  Menu
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Highlight');scrollToTopSubPage();setToggleMenu(false)}} $current={currentPage === 'Highlight'}>
                  Order Online
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/testimonials'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Testimonials');scrollToTop('Testimonials-page');setToggleMenu(false)}} $current={currentPage === 'Testimonials'}>
                  Testimonials
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/about'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('About');scrollToTop('About-page');setToggleMenu(false)}} $current={currentPage === 'About'}>
                  About Us
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/reserve-table'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {setCurrentPage('Reservation');scrollToTop('Reservation-page');setToggleMenu(false)}} $current={currentPage === 'Reservation'}>
                  Reserve a table
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
              {!user ? (
                <MobileMenuButton
                  onClick={() => {login();setToggleMenu(false)}}
                >
                  Login / Sign Up
                </MobileMenuButton>
                ) : (
                <MobileMenuButton
                  onClick={() => {logout();setToggleMenu(false)}}
                >
                  Logout
                </MobileMenuButton>
                )
              }
          </StyledUlmobile>
        </AnimatedWrappedMobileMenu>
        </>
      ) : (
        <>
        <AnimatedWrappedMobileMenu $toggleMenu={toggleMenu}>
          <StyledUlmobile>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("Home")();setToggleMenu(false)}} $current={currentPage === 'Home'}>
                  Home
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/menu'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("AllMenu")();setToggleMenu(false)}} $current={currentPage === 'AllMenu'}>
                  Menu
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("Menu")();setToggleMenu(false)}} $current={currentPage === 'Menu'}>
                  Order Online
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/testimonials'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("Testimonials")();setToggleMenu(false)}} $current={currentPage === 'Testimonials'}>
                  Testimonials
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/about'>
              <StyledLiMobile>
                <MobileMenuButton onClick={() => {handleClick("About")();setToggleMenu(false)}} $current={currentPage === 'About'}>
                  About Us
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
            <Link href='/content/pages/reserve-table'>
              <StyledLiMobile>
                <MobileMenuButton href="#Reservation-section" onClick={() => {handleClick("Reservation")();setToggleMenu(false)}} $current={currentPage === 'Reservation'}>
                  Reserve a table
                </MobileMenuButton>
              </StyledLiMobile>
            </Link>
              {!user ? (
                <MobileMenuButton
                  onClick={() => {login();setToggleMenu(false)}}
                >
                  Login / Sign Up
                </MobileMenuButton>
                ) : (
                <MobileMenuButton
                  onClick={() => {logout();setToggleMenu(false)}}
                >
                  Logout
                </MobileMenuButton>
                )
              }
          </StyledUlmobile>
        </AnimatedWrappedMobileMenu>
        </>
      )}
    </StyledNavbar>
  );
};

export default NavBar;