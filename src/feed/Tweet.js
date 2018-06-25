import React from 'react';
import styled from 'styled-components';
import { Comment, Retweet, Likes, Envelope } from '../Ui/Icon';
import { distanceInWords } from 'date-fns';

const Container = styled.div`
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 20px;
`;

const Avatar = styled.div`
  width: 50px;
  padding-right: 10px;
`;

const Body = styled.div`
  font-size: ${props => (props.big ? '26px' : '16px')};
  font-weight: 100;
  line-height: ${props => (props.big ? '30px' : '20px')};
  flex: 1 1 0;

  img {
    margin: 10px 0;
  }
`;

const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  color: #66757f;
  font-size: 12px;

  em {
    color: black;
    font-style: normal;
    font-size: 14px;
    margin-right: 5px;
  }
`;

const Icons = styled.div`
  height: 40px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 14px;
  line-height: 16px;
  margin-left: 4px;
  color: ${prop => (prop.active ? '#E32B51' : '#667580')};
  font-weight: 600;
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const Tweet = ({
  pinned,
  children,
  username,
  time,
  name,
  avatar,
  stat = [],
  big
}) => (
  <Container>
    <Avatar>
      <img width={50} src={avatar} alt={username} />
    </Avatar>
    <Body big={big}>
      <Header>
        <em>{name}</em>
        @{username} {distanceInWords(time, new Date())}
      </Header>
      {children}
      <Icons>
        <Icon>
          <Comment />
          {stat.comment || ''}
        </Icon>
        <Icon>
          <Retweet />
          {stat.retweet || ''}
        </Icon>
        <Icon active={stat.liked}>
          <Likes active={stat.liked} />
          {stat.like || ''}
        </Icon>
        <Icon>
          <Envelope />
          {stat.message || ''}
        </Icon>
      </Icons>
    </Body>
  </Container>
);

export default Tweet;
