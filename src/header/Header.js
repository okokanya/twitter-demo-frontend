import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Ui/Container';
import {
  Home,
  Moments,
  Notifications,
  Messages,
  TwitterIcon,
} from '../Ui/Icon';
import Avatar from '../Ui/Avatar';
import Button from '../Ui/Button';
import SearchInput from '../Ui/SearchInput';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  position: relative;
`;

const Block = styled.div`
  display: flex;
`;

const Item = styled.div`
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

const Img = styled.div`
  margin-right: 8px;
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
      <Block>
        <Item>
          <Img>
            <Home />
          </Img>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Img>
            <Moments />
          </Img>
          <Link to="/i/moments">Moments</Link>
        </Item>
        <Item>
          <Img>
            <Notifications />
          </Img>
          <Link to="/i/notifications">Notifications</Link>
        </Item>
        <Item>
          <Img>
            <Messages />
          </Img>
          <Link to="/i/messages">Messages</Link>
        </Item>
      </Block>
      <Block>
        <SearchInput placeholder="Search Twitter" />
        <Avatar small />
        <Button blue>Tweet</Button>
      </Block>
      <TwitterLogo>
        <TwitterIcon />
      </TwitterLogo>
    </Nav>
  </Container>
);

export default Header;
