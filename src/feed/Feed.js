
import React, { Component } from 'react';
import styled from 'styled-components';

import Tweet from './Tweet';
import Avatar from '../ui/Avatar';

const FeedContainer = styled.section `
  height: auto;
  background-color: white;
  border-bottom: 2px solid #e1e8ed;
`;

class Feed extends Component {
  render() {
    return (
      <FeedContainer>
        <Tweet avatar>
          <Avatar small /> message children 
        </Tweet>
      </FeedContainer>
    );
  }
}

export default Feed;
