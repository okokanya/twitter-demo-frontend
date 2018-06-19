
import React, { Component } from 'react';
import styled from 'styled-components';

import Tweet from './Tweet';
import avatar from '../img/avatar.png';

const FeedContainer = styled.section `
  height: auto;
  background-color: white;
  border-bottom: 2px solid #e1e8ed;
`;

class Feed extends Component {
  render() {
    return (
      <FeedContainer>
        <Tweet avatar={avatar} username="EveryInteract" name="Every Interaction" time="23h">
          Here will be some message (tweet)
        </Tweet>
      </FeedContainer>
    );
  }
}

export default Feed;
