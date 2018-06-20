import React, { Component } from 'react';
import styled from 'styled-components';

import Tweet from './Tweet';
import avatar from '../img/avatar.png';

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
  color: ${props => props.active ? 'black' : '#1da1f2'};
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

class Feed extends Component {
  render() {
    return (
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
          stat={[0, 2, 3, 4]}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur
        </Tweet>
        <Tweet
          avatar={avatar}
          username="EveryInteract"
          name="Every Interaction"
          time="23h"
          stat={[0, 2, 3, 4]}
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Tweet>
        <Tweet
          avatar={avatar}
          username="EveryInteract"
          name="Every Interaction"
          time="23h"
          stat={[1, 2, 1, 0]}
        >
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?
        </Tweet>
        <Tweet
          avatar={avatar}
          username="EveryInteract"
          name="Every Interaction"
          time="23h"
          stat={[2, 3, 4, 5]}
        >
          аNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
          quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.
        </Tweet>
      </FeedContainer>
    );
  }
}

export default Feed;
