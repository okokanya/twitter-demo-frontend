import React from 'react';
import styled from 'styled-components';

import Feed from '../Feed/Feed';
import ProfileDescription from '../ProfileDescription';
import LinksBlock from '../LinksBlock';
import Container from '../Ui/Container';
import Button from '../Ui/Button';
import Stat from '../Ui/Stat';
import { More } from '../Ui/Icon';

const Statistic = styled.div`
  height: 60px;
  border-bottom: 2px solid #c5cdd2b0;
  background: white;
`;

const Content = styled.div`
  background: #e6ecf0;
  padding-top: 8px;
`;

const HeaderImg = styled.div`
  height: 380px;
  width: 100%;
  background-image: url('../img/headerImg.png');
  background-size: cover;
  background-position-y: -230px;
  background-repeat: no-repeat;
`;

const RightBlock = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const StatBlock = styled.div`
  display: flex;
`;
const Profile = ({ match }) => (
  <div>
    <HeaderImg />
    <Statistic>
      <Container>
        <Container small>
          <StatBlock>
            <Stat number={8058} title="Tweets" to={`/${match.params.user}`} />
            <Stat
              number={721}
              title="Following"
              to={`/${match.params.user}/following`}
            />
            <Stat
              number={1815}
              title="Followers"
              to={`/${match.params.user}/followers`}
            />
            <Stat
              number={460}
              title="Likes"
              to={`/${match.params.user}/likes`}
            />
            <Stat number={2} title="Lists" to={`/${match.params.user}/lists`} />
          </StatBlock>
        </Container>
        <RightBlock>
          <Button>Follow</Button>
          <More />
        </RightBlock>
      </Container>
    </Statistic>
    <Content>
      <Container>
        <ProfileDescription user={match.params.user} />
        <Container small>
          <Feed user={match.params.user} />
        </Container>
        <LinksBlock />
      </Container>
    </Content>
  </div>
);

export default Profile;
