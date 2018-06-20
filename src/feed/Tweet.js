import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  align-items: center;
`;

const Tweet = ({ children, username, time, name, avatar }) => (
  <TweetContainer>
    <TweetAvatar><img width={50} src={avatar} alt={username} /></TweetAvatar>
    <TweetBody>
      <TweetHeader><em>{name}</em> @{username} {time}</TweetHeader>
      {children}
      <TweetIcons>Иконки тут</TweetIcons>
    </TweetBody>
  </TweetContainer>
);

export default Tweet;
