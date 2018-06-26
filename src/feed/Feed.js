import React from 'react';
import styled from 'styled-components';

import Tweet from './Tweet';
import Embed from '../Ui/Embed';

import { colors } from '../Ui/Colors';

import { tweets } from '../data';

const FeedContainer = styled.section`
  height: auto;
  background-color: white;
  border-bottom: 2px solid #e1e8ed;
`;

const FeedTabs = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #e6ecf0;
`;

const FeedTab = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.active ? 'black' : colors.blue)};
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
    {tweets.map(tweet => (
      <Tweet
        avatar={tweet.avatar}
        username={tweet.username}
        name={tweet.name}
        time={tweet.time}
        stat={tweet.stat}
        big={tweet.textSize === 'big'}
      >
        <div dangerouslySetInnerHTML={{ __html: tweet.html }} />
        {tweet.image && <img src={tweet.image} alt="tweet" />}
        {tweet.embed && (
          <Embed
            img={tweet.embed.img}
            title={tweet.embed.title}
            text={tweet.embed.text}
            link={tweet.embed.link}
            linkUrl={tweet.embed.linkUrl}
          />
        )}
      </Tweet>
    ))}
  </FeedContainer>
);

export default Feed;
