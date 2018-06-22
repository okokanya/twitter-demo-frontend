import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  margin-bottom: 20px;
  color: #667785;
  font-size: 12px;
`;

const Header = styled.a `
  display: block;
  color: #2AA3EF;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;

const Trend = ({ title, count, link, children}) => (
  <Wrapper>
    <Header href={link}>{title}</Header>
    {count && `${count} Tweets`}
    {children}
  </Wrapper>
);

export default Trend;