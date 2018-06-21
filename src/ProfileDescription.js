import React from 'react';
import styled from 'styled-components';

import Avatar from './ui/Avatar';
import Button from './ui/Button';

import {Location, Link, Joined} from './ui/Icon';

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

const Icon = styled.ul `
    list-style-type: none;
    line-height: 16px;
    color: #697786;
    font-size: 14px;
    margin: 10px 0 20px 0;

    svg {
      margin-right: 10px;
      vertical-align: middle;
    }
`;

const Buttons = styled.div `
  display: flex;

  button {
    flex: 1 1 0;
  }
`;

const ProfileDescription = () => (
  <Container>
    <DescAvatar><Avatar big/></DescAvatar>
    <Header>Every Interaction</Header>
    <Subheader>@EveryInteract
      <span>follows you</span>
    </Subheader>
    <Description>Some info here</Description>
    <ul>
      <Icon><Location/>London</Icon>
      <Icon><Link/>
        <a href="#">everyiteraction.com</a>
      </Icon>
      <Icon><Joined/>Joined May 2008</Icon>
    </ul>
    <Buttons>
      <Button blue block>Tweet to</Button>
      <Button blue block>Message</Button>
    </Buttons>
  </Container>
);

export default ProfileDescription;
