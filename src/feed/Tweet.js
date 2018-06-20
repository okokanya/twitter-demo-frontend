import React from 'react';
import styled from 'styled-components';
import {  Comment, Retweet, Likes, Envelope } from '../ui/Icon';

const TweetContainer = styled.div `
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 20px;
`;

const TweetAvatar = styled.div `
  width: 50px;
  padding-right: 10px;
`;

const TweetBody = styled.div `
  font-size: 26px;
  font-weight: 100;
  line-height: 30px;
  flex: 1 1 0;
`;

const TweetHeader = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
  color: #66757F;
  font-size: 12px;

  em {
    color: black;
    font-style: normal;
    font-size: 14px;
    margin-right: 5px;
  }
`;

const TweetIcons = styled.div `
  height: 40px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TweetIcon = styled.span `
  font-size: 14px;
  line-height: 16px;
  margin-left: 4px;
  color: #667580;
  font-weight: 600;

  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const Tweet = ({ children, username, time, name, avatar }) => (
  <TweetContainer>
    <TweetAvatar><img width={50} src={avatar} alt={username} /></TweetAvatar>
    <TweetBody>
      <TweetHeader><em>{name}</em> @{username} {time}</TweetHeader>
      {children}
      <TweetIcons>
        <TweetIcon><Comment />2</TweetIcon>
        <TweetIcon><Retweet />2</TweetIcon>
        <TweetIcon><Likes />2</TweetIcon>
        <TweetIcon><Envelope />2</TweetIcon>
      </TweetIcons>
    </TweetBody>
  </TweetContainer>
);

export default Tweet;
