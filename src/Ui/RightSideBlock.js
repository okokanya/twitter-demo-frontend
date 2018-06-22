import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  margin-bottom: 20px;
  background-color: white;
  padding: 20px;

`;

const Header = styled.div `
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const RightSideBlock = ({title, children}) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    {children}
  </Wrapper>
);

export default RightSideBlock;
