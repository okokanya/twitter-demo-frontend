import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Margin from './Margin';

const Wraper = styled.div `
  display:flex;
  align-items: stretch;
`;

const Header = styled.div `
  display: flex;
  padding: 10px 0;
`;

const Name = styled.div `
  font-weight: bold;
`;

const Username = styled.div `
  color: #718290;
  font-weight: 100;
`;

const WhoToFollow = ({img, name, username}) => (
  <Wraper>
    <Margin>    
      <img src={img} alt="" height="48px"/>
    </Margin>
    <Margin>
      <Header>
        <Name>{name}</Name>
        <Username>@{username}</Username>
      </Header>
      <Button>Follow</Button>
    </Margin>
</Wraper>
);

export default WhoToFollow;
