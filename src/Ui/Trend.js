import React from 'react';
import styled from 'styled-components';
// import { FormattedNumber } from 'react-intl'

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

const makeMeTheKey = input => {
  if (input > 1200) {
    return(Math.round((input/1000) * 10) / 10 + 'K');
  }
  return input
};

const Trend = ({ title, count, link, children}) => (
  <Wrapper>
    <Header href={link}>{title}</Header>
    {count && <span>{makeMeTheKey(count)} Tweets</span>}
    {children}
  </Wrapper>
);

export default Trend;