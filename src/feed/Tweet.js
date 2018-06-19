import React from 'react';
import styled from 'styled-components';

const TweetContainer = styled.div `
  display: flex;
`;

const TweetAvatar = styled.div `
  width: 50px;
`;

const TweetBody = styled.div `
  flex: 1 1 0;
`;

const TweetHeader = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
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

// теперь это говно надо офрмить

export default Tweet;
