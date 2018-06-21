import React from 'react';
import styled from 'styled-components';

import Avatar from './ui/Avatar';
import Button from './ui/Button';

import { Location, LinkIcon, Joined } from './ui/Icon';

const Container = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
`;

const DescAvatar = styled.div `
  margin-top: -160px;
  margin-bottom: 20px;
`;

const Header = styled.div `
  font-size: 22px;
  font-weight: 800;
`;

const Subheader = styled.div `
  color: #697786;
  font-size: 14px;
  margin-bottom: 20px;

  span {
    font-size: 12px;
  }
`;

const Description = styled.div `
  font-size: 14px;
  margin-bottom: 20px;
`;

const Icon = styled.li `
    list-style-type: none;
    line-height: 16px;
    color: #697786;
    font-size: 14px;
    margin: 10px 0 20px 0;
    display: flex;
    align-items: center;
`;

const IconImg = styled.div `
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div `
  display: flex;
`;

const ProfileDescription = () => (
  <Container>
    <DescAvatar><Avatar big /></DescAvatar>
    <Header>Every Interaction</Header>
    <Subheader>@EveryInteract
      <span>follows you</span>
    </Subheader>
    <Description>Some info here</Description>
    <ul>
      <Icon>
        <IconImg><Location /></IconImg>London
      </Icon>
      <Icon>
        <IconImg><LinkIcon /></IconImg>
        <a href="#a" >everyiteraction.com</a>
      </Icon>
      <Icon>
        <IconImg><Joined /></IconImg>Joined May 2008
      </Icon>
    </ul>
    <Buttons>
      <Button blue block>Tweet to</Button>
      <Button blue block>Message</Button>
    </Buttons>
  </Container>
);

export default ProfileDescription;
