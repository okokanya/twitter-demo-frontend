import React from 'react';
import styled from 'styled-components';

import Tweet from './Tweet';
import avatar from '../img/avatar.png';

import resources from '../img/resources.png'


const FeedContainer = styled.section `
  height: auto;
  background-color: white;
  border-bottom: 2px solid #e1e8ed;
`;

const FeedTabs = styled.div `
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #e6ecf0;
`;

const FeedTab = styled.div `
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.active
  ? 'black'
  : '#1da1f2')};
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

const Feed = () => (
  <FeedContainer>
    <FeedTabs>
      <FeedTab active>Tweets</FeedTab>
      <FeedTab>Tweets & replies</FeedTab>
      <FeedTab>Media</FeedTab>
    </FeedTabs>
    <Tweet
      avatar={avatar}
      username="EveryInteract"
      name="Every Interaction"
      time={new Date(2018, 6, 20)}
      stat={{comment: 10, retweet: 2, like: 3, message: 4, liked: true }}>
      We’ve made some more resources for all you wonderful #design folk 
      <a href="everyinteraction.com/resources/">everyinteraction.com/resources/</a> #webdesign #UI <img src={resources} />
    </Tweet>
    <Tweet
      avatar={avatar}
      username="EveryInteract"
      name="Every Interaction"
      time={new Date(2018, 6, 20)}
      stat={{comment: 0, retweet: 62, like: 30, message: 4}}>
      Our new website concept; Taking you from… @ Every Interaction
      instagram.com/p/BNFGrfhBP3M/
    </Tweet>
    <Tweet
      avatar={avatar}
      username="EveryInteract"
      name="Every Interaction"
      time={new Date(2018, 6, 20)}
      stat={{comment: 0, retweet: 27, like: 3, message: 4}}>
      Variable web fonts are coming, and will open a world of opportunities for weight
      use online
    </Tweet>

  </FeedContainer>
);

export default Feed;
