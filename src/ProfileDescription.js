import React from 'react';
import styled from 'styled-components';

import Avatar from './ui/Avatar';
import Button from './ui/Button';

import { Location, Link, Joined } from './ui/Icon';

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
  margin-bottom: 20px;
`;

const DescIcons = styled.div `
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    line-height: 16px;
    color: #697786;
    font-size: 14px;
    margin: 10px 0 20px 0;

    svg {
      margin-right: 10px;
      vertical-align: middle;
    }
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
        <li><Location />London</li>
        <li><Link /><a href="#">everyiteraction.com</a></li>
        <li><Joined />Joined May 2008</li>
      </ul>
    </DescIcons>
    <DescButtons>
      <Button blue block>Tweet to</Button>
      <Button blue block>Message</Button>
    </DescButtons>
  </DescContainer>
);

export default ProfileDescription;
