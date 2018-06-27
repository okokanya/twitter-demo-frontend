import React from 'react';
import styled from 'styled-components';

import RightSideBlock from './Ui/RightSideBlock';
import { followersSuggest } from './data';
import Trend from './Ui/Trend';
import WhoToFollow from './Ui/WhoToFollow';
import { Link } from 'react-router-dom';
import { trends } from './data';
import { People } from './Ui/Icon';

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
`;

const FooterLink = styled.a`
  color: #72828f;
  white-space: nowrap;
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
      {followersSuggest.map(followersSuggest => (
        <Link to={`${followersSuggest.link}`}>
          <WhoToFollow
            img={followersSuggest.img}
            name={followersSuggest.name}
            username={followersSuggest.username}
          />
        </Link>
      ))}

      <BlockFooter>
        <a href="#">
          <People /> Find people you know
        </a>
      </BlockFooter>
    </RightSideBlock>

    <RightSideBlock title="United Kingdom Trends" links={trendsLinks}>
      {trends.map(trend => (
        <Trend title={trend.title} count={trend.count} link={trend.link}>
          {trend.text}
        </Trend>
      ))}
    </RightSideBlock>

    <Footer>
      @2018 Twitter <FooterLink href="#">About</FooterLink>{' '}
      <FooterLink href="#">Help Center</FooterLink>{' '}
      <FooterLink href="#">Terms</FooterLink>{' '}
      <FooterLink href="#">Privacy policy</FooterLink>{' '}
      <FooterLink href="#">Cookies</FooterLink>{' '}
      <FooterLink href="#">Ads info</FooterLink>
    </Footer>
  </Wrapper>
);

export default LinksBlock;
