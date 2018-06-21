import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import { Home, Moments, Notifications, Messages, TwitterIcon } from '../ui/Icon';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import SearchInput from '../ui/SearchInput';

const Nav = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: white;
  position: relative;
`;

const NavBlock = styled.div `
  display: flex;
  align-items: center;
  div {
    margin: 0 10px;
  }
`;

const NavItem = styled.div `
  display: flex;
  color: #66757F;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  word-spacing: 5px;
  align-item: center;
  cursor: pointer;
  :hover {
    opacity: .5;
  }
`;

const NavItemImg = styled.div `
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const TwitterLogo = styled.div `
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
`;

const Header = () => (
  <Container>
    <Nav>
      <NavBlock>
        <NavItem>
          <NavItemImg><Home /></NavItemImg>Home
        </NavItem>
        <NavItem>
          <NavItemImg><Moments /></NavItemImg>Moments
        </NavItem>
        <NavItem>
          <NavItemImg><Notifications /></NavItemImg>Notifications
        </NavItem>
        <NavItem>
          <NavItemImg><Messages /></NavItemImg>Messages
        </NavItem>
      </NavBlock>
      <NavBlock>
        <SearchInput placeholder="Search Twitter" />
        <Avatar small />
        <Button blue>Tweet</Button>
      </NavBlock>
      <TwitterLogo>
        <TwitterIcon />
      </TwitterLogo>
    </Nav>
  </Container>
);

export default Header;
