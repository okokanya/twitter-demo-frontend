import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import {Home, Moments, Notifications, Messages, TwitterIcon} from '../ui/Icon';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import SearchInput from '../ui/SearchInput';

const Nav = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  position: relative;
`;

const NavBlock = styled.div `
  display: flex;
`;
const Margin = styled.div `
  margin: 0 10px;
`

const NavItem = styled.div `
  display: flex;
  color: #66757F;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  word-spacing: 5px;
  align-items: center;
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
      <Margin>
        <NavItem>
          <NavItemImg><Home/></NavItemImg>Home
        </NavItem>
        </Margin>
        <Margin>
        <NavItem>
          <NavItemImg><Moments/></NavItemImg><Margin>Moments</Margin>
        </NavItem>
        </Margin>
        <Margin>
        <NavItem>
          <NavItemImg><Notifications/></NavItemImg><Margin>Notifications</Margin>
        </NavItem>
        </Margin>
        <Margin>
        <NavItem>
          <NavItemImg><Messages/></NavItemImg><Margin>Messages</Margin>
        </NavItem>
        </Margin>
      </NavBlock>
      <NavBlock>
        <Margin>
        <SearchInput placeholder="Search Twitter"/>
        </Margin>
        <Margin>
        <Avatar small/>
        </Margin>
        <Margin>
        <Button blue>Tweet</Button>
        </Margin>
      </NavBlock>
      <TwitterLogo>
        <TwitterIcon/>
      </TwitterLogo>
    </Nav>
  </Container>
);

export default Header;
