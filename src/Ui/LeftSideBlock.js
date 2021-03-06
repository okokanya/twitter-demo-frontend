import React from 'react';
import styled from 'styled-components';
import { colors } from './Colors';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Header = styled.div`
  color: ${colors.blue};
  font-weight: 100;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Margin = styled.div`
  margin-right: 5px;
`;

const LeftSideBlock = ({ icon: Icon, count, title, children }) => (
  <Wrapper>
    <Header>
      <Margin>
        <Icon />
      </Margin>{' '}
      {count} {title}
    </Header>
    <Content>{children}</Content>
  </Wrapper>
);

export default LeftSideBlock;
