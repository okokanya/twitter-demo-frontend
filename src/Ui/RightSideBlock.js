import React from 'react';
import styled from 'styled-components';
import { Dot } from './Icon';

const Wrapper = styled.div`
  margin-bottom: 20px;
  background-color: white;
  padding: 20px;
`;

const Header = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const HeaderLink = styled.div`
  font-size: 12px;
  margin-left: 5px;
  white-space: nowrap;
  font-weight: 200;
  color: #6e7683;

  svg {
    vertical-align: middle;
    padding-right: 5px;
  }
`;
const RightSideBlock = ({ title, children, links }) => (
  <Wrapper>
    <Header>
      {title}{' '}
      {links.map(link => (
        <HeaderLink>
          <Dot /> {link}
        </HeaderLink>
      ))}
    </Header>
    {children}
  </Wrapper>
);

export default RightSideBlock;
