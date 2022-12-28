import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, queries } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  const open = () => setShowMobileMenu(true);
  const closed = () => setShowMobileMenu(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag">
              <VisuallyHidden>Open Cart</VisuallyHidden>
            </Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search">
              <VisuallyHidden>Search</VisuallyHidden>
            </Icon>
          </UnstyledButton>
          <UnstyledButton onClick={open}>
            <Icon id="menu">
              <VisuallyHidden>Menu</VisuallyHidden>
            </Icon>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={closed} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media ${queries.tabletMin} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }
  @media ${queries.phoneMin} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${queries.tabletMin} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  @media ${queries.tabletMin} {
    display: flex;
    gap: 32px;
  }
  @media ${queries.phoneMin} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${queries.tabletMin} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  @media ${queries.tabletMin} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
