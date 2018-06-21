import React from 'react';
import styled from 'styled-components';

import Feed from '../feed/Feed';
import ProfileDescription from '../ProfileDescription';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Stat from '../ui/Stat';
import {More} from '../ui/Icon';

import headerImg from '../img/headerImg.png';

const Statistic = styled.div `
  height: 60px;
  border-bottom: 2px solid #c5cdd2b0;
  background: white;
`;

const Content = styled.div `
  background: #E6ECF0;
  padding-top: 8px;
`;

const HeaderImg = styled.div `
  height: 380px;
  width: 100%;
  background-image: url(${headerImg});
  background-size: cover;
  background-position-y: -230px;
  background-repeat: no-repeat;
`;

const RightBlock = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;  
`;

const StatBlock = styled.div `
  display: flex;
`;

const Profile = () => (
  <div>
    <HeaderImg/>
    <Statistic>
      <Container>
        <Container small>
          <StatBlock>
            <Stat number={8058} title="Tweets" active/>
            <Stat number={721} title="Following"/>
            <Stat number={1815} title="Followers"/>
            <Stat number={460} title="Likes"/>
            <Stat number={2} title="Lists"/>
          </StatBlock>
        </Container>
        <RightBlock>
          <Button>Follow</Button>
          <More/>
        </RightBlock>
      </Container>
    </Statistic>
    <Content>
      <Container>
        <ProfileDescription/>
        <Container small>
          <Feed/>
        </Container>
      </Container>
    </Content>
  </div>
);

export default Profile;
