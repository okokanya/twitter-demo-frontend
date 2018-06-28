import React from 'react';
import styled from 'styled-components';
import Container from '../Ui/Container';
import {
  Home,
  Moments,
  Notifications,
  Messages,
  TwitterIcon
} from '../Ui/Icon';
import Avatar from '../Ui/Avatar';
import Button from '../Ui/Button';
import SearchInput from '../Ui/SearchInput';

import { Link } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  position: relative;
`;

const NavBlock = styled.div`
  display: flex;
  div {
    margin: 0 8px;
  }
`;

const NavItem = styled.div`
  margin-left: 16px;
  display: flex;
  color: #66757f;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  word-spacing: 5px;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const NavItemImg = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const TwitterLogo = styled.div`
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
          <NavItemImg>
            <Home />
          </NavItemImg>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <NavItemImg>
            <Moments />
          </NavItemImg>
          <Link to="/i/moments">Moments</Link>
        </NavItem>
        <NavItem>
          <NavItemImg>
            <Notifications />
          </NavItemImg>
          <Link to="/i/notifications">Notifications</Link>
        </NavItem>
        <NavItem>
          <NavItemImg>
            <Messages />
          </NavItemImg>
          <Link to="/i/messages">Messages</Link>
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
