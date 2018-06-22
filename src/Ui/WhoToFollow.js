import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Margin from './Margin';

const Wraper = styled.div `
  display:flex;
  align-items: stretch;
  padding: 10px 0;
  border-bottom: 1px solid #E6ECF0;

`;

const Header = styled.div `
  display: flex;
  padding: 10px 0;
  
`;

const NameBlock = styled.div `
  font-weight: bold;
  flex: 1 0 0;
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

const WhoToFollow = ({img, name, username}) => (
  <Wraper>
    <Margin>    
      <img src={img} alt="" height="48px"/>
    </Margin>
    <Margin>
      <Header>
        <NameBlock>{name}</NameBlock>
        <UsernameBlock>@{username}</UsernameBlock>
      </Header>
      <Button>Follow</Button>
    </Margin>
  </Wraper>
);

export default WhoToFollow;
