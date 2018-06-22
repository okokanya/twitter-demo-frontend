import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Margin from './Margin';

const Wrapper = styled.div `
  display:flex;
  padding: 10px 0;
  border-bottom: 1px solid #E6ECF0;
  box-sizing: border-box;
`;

const Header = styled.div `
  display: flex;
  padding: 10px 0;
`;

const NameBlock = styled.div `
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UsernameBlock = styled.div `
  color: #718290;
  font-weight: 100;
  flex: 1 0 0;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FollowBlock = styled.div `
  overflow: hidden;
`;

const WhoToFollow = ({img, name, username}) => (
  <Wrapper>
    <Margin>    
      <img src={img} alt="" height="48px"/>
    </Margin>
    <FollowBlock>
      <Header>
        <NameBlock>{name}</NameBlock>
        <UsernameBlock>@{username}</UsernameBlock>
      </Header>
      <Button>Follow</Button>
    </FollowBlock>
  </Wrapper>
);

export default WhoToFollow;
