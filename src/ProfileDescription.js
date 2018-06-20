import React from 'react';
import styled from 'styled-components';

import Avatar from './ui/Avatar';
import Button from './ui/Button';

import Messages from './ui/Icon';

const DescContainer = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
`;

const DescAvatar = styled.div `
  margin-top: -160px;
  margin-bottom: 20px;
`;

const DescHeader = styled.div `
  font-size: 22px;
  font-weight: 800;
`;

const DescSubheader = styled.div `
  color: #697786;
  font-size: 14px;
  margin-bottom: 20px;

  span {
    font-size: 12px;
  }
`;

const Desc = styled.div `
  font-size: 14px;
`;

const DescIcons = styled.div `
  li {
  list-style-type: none;
  }
`;

const DescButtons = styled.div `
  display: flex;

  button {
    flex: 1 1 0;
  }
`;

const ProfileDescription = () => (
  <DescContainer>
    <DescAvatar><Avatar big /></DescAvatar>
    <DescHeader>Every Interaction</DescHeader>
    <DescSubheader>@EveryInteract <span>follows you</span></DescSubheader>
    <Desc>Some info here</Desc>
    <DescIcons>
      <ul>
        <li><Messages />London</li>
        <li>Иконка два</li>
        <li>Иконка три</li>
      </ul>
    </DescIcons>
    <DescButtons>
      <Button blue block>Tweet to</Button>
      <Button blue block>Message</Button>
    </DescButtons>
  </DescContainer>
);

export default ProfileDescription;
