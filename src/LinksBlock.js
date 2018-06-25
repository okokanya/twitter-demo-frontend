import React from 'react';
import styled from 'styled-components';

import RightSideBlock from './Ui/RightSideBlock';
import WhoToFollow from './Ui/WhoToFollow';
import Trend from './Ui/Trend';

import { People } from './Ui/Icon';

import re1 from './img/re1.png';
import re2 from './img/re2.png';
import re3 from './img/re3.png';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 290px;
`;

const Footer = styled.div`
  font-size: 12px;
  color: #72828f;
  line-height: 20px;

  a {
    color: #72828f;
    white-space: nowrap;
  }
`;

const BlockFooter = styled.div`
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;

  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const whoToFollowLinks = [<a href="#">Refresh</a>, <a href="#">View All</a>];

const trendsLinks = [<a href="#">Change</a>];

const LinksBlock = () => (
  <Wrapper>
    <RightSideBlock title="Who to follow" links={whoToFollowLinks}>
      <WhoToFollow img={re1} name="AppleInsider" username="appleinsider" />
      <WhoToFollow img={re2} name="Creode" username="Creode" />
      <WhoToFollow img={re3} name="Epiphany Search" username="Epiphan" />
      <BlockFooter>
        <a href="#">
          <People /> Find people you know
        </a>
      </BlockFooter>
    </RightSideBlock>
    <RightSideBlock title="United Kingdom Trends" links={trendsLinks}>
      <Trend title="#BrongYourDogToWorkDay" link="#" count={234} />
      <Trend title="#FridayFeeling" link="#" count={12123} />
      <Trend title="#BrexitAnniversary" link="#">
        It's one year since the UK voted to leave the European Union
      </Trend>
      <Trend title="Joe Budden" link="#" count={1036} />
    </RightSideBlock>
    <Footer>
      @2018 Twitter <a href="#">About</a> <a href="#">Help Center</a>{' '}
      <a href="#">Terms</a> <a href="#">Privacy policy</a>{' '}
      <a href="#">Cookies</a> <a href="#">Ads info</a>
    </Footer>
  </Wrapper>
);

export default LinksBlock;
