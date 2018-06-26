import React from 'react';
import styled from 'styled-components';

import Avatar from './Ui/Avatar';
import Button from './Ui/Button';

import { Location, LinkIcon, Joined, Followers, Photo } from './Ui/Icon';
import LeftSideBlock from './Ui/LeftSideBlock';
import Picture from './Ui/Picture';
import Avatar1 from './img/Avatar1.png';
import Avatar2 from './img/Avatar2.png';
import Avatar3 from './img/Avatar3.png';
import Avatar4 from './img/Avatar4.png';
import Avatar5 from './img/Avatar5.png';
import Avatar6 from './img/Avatar6.png';

import Photos1 from './img/Photos1.png';
import Photos2 from './img/Photos2.png';
import Photos3 from './img/Photos3.png';
import Photos4 from './img/Photos4.png';
import Photos5 from './img/Photos5.png';
import Photos6 from './img/Photos6.png';
import { followersYouKnow } from './data';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
`;

const DescAvatar = styled.div`
  margin-top: -160px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 800;
`;

const Subheader = styled.div`
  color: #697786;
  font-size: 14px;
  margin-bottom: 20px;

  span {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const Icon = styled.li`
  list-style-type: none;
  line-height: 16px;
  color: #697786;
  font-size: 14px;
  margin: 10px 0 20px 0;
  display: flex;
  align-items: center;
`;

const IconImg = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ProfileDescription = () => (
  <Container>
    <DescAvatar>
      <Avatar big />
    </DescAvatar>
    <Header>Every Interaction</Header>
    <Subheader>
      @EveryInteract
      <span>follows you</span>
    </Subheader>
    <Description>Some info here</Description>
    <ul>
      <Icon>
        <IconImg>
          <Location />
        </IconImg>London
      </Icon>
      <Icon>
        <IconImg>
          <LinkIcon />
        </IconImg>
        <a href="#a">everyiteraction.com</a>
      </Icon>
      <Icon>
        <IconImg>
          <Joined />
        </IconImg>Joined May 2008
      </Icon>
    </ul>
    <Buttons>
      <Button blue block>
        Tweet to
      </Button>
      <Button blue block>
        Message
      </Button>
    </Buttons>

    <LeftSideBlock icon={Followers} count={6} title="Followers you know">
      {followersYouKnow.map(willyou => (
        <Picture small src={willyou.img} link={willyou.link} />
      ))}

    </LeftSideBlock>

    <LeftSideBlock icon={Photo} count={522} title="Photos and videos">
      <Picture src={Photos1} />
      <Picture src={Photos2} />
      <Picture src={Photos3} />
      <Picture src={Photos4} />
      <Picture src={Photos5} />
      <Picture src={Photos6} />
    </LeftSideBlock>
  </Container>
);

export default ProfileDescription;
