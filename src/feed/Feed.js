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
  height: 50px;
  display: flex;
  padding: 5px 20px 0 20px;
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
      time="23h"
      stat={[0, 2, 3, 4]}>
      We’ve made some more resources for all you wonderful #design folk
      everyinteraction.com/resources/ #webdesign #UI <img src={resources} />
    </Tweet>
    <Tweet
      avatar={avatar}
      username="EveryInteract"
      name="Every Interaction"
      time="23h"
      stat={[0, 2, 3, 4]}>
      Our new website concept; Taking you from… @ Every Interaction
      instagram.com/p/BNFGrfhBP3M/
    </Tweet>
    <Tweet
      avatar={avatar}
      username="EveryInteract"
      name="Every Interaction"
      time="23h"
      stat={[1, 2, 1, 0]}>
      Variable web fonts are coming, and will open a world of opportunities for weight
      use online
    </Tweet>

  </FeedContainer>
);

export default Feed;
