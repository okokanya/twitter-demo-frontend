import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import {
  Home,
  Moments,
  Notifications,
  Messages,
  TwitterIcon
} from '../ui/Icon';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import SearchInput from '../ui/SearchInput';

const HeaderNav = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: white;
  position: relative;
`;

const HeaderNavBlock = styled.div `
  display: flex;
  align-items: center;
  div {
    margin: 0 10px;
  }
`;

const HeaderNavItem = styled.div `
  display: flex;
  color: #66757F;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  word-spacing: 5px;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
  :hover {
    opacity: .5;
  }
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
    <HeaderNav>
      <HeaderNavBlock>
        <HeaderNavItem><Home />Home</HeaderNavItem>
        <HeaderNavItem><Moments />Moments</HeaderNavItem>
        <HeaderNavItem><Notifications />Notifications</HeaderNavItem>
        <HeaderNavItem><Messages />Messages</HeaderNavItem>
      </HeaderNavBlock>
      <HeaderNavBlock>
        <SearchInput placeholder="Search Twitter" />
        <Avatar small />
        <Button blue>Tweet</Button>
      </HeaderNavBlock>
      <TwitterLogo>
        <TwitterIcon />
      </TwitterLogo>
    </HeaderNav>
  </Container>
);

export default Header;
