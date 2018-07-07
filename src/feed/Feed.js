import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Tweet from './Tweet';
import Embed from '../Ui/Embed';

import colors from '../Ui/Colors';

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

const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.blue};
  margin-right: 20px;
  cursor: pointer;
  :hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;

class Feed extends React.Component {
  state = {
    loading: true,
    statusList: null,
  };

  componentDidMount() {
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${
      this.props.user
    }/statuses?access_token=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then(res => {
        this.handleGetStatuses(res.data);
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleGetStatuses = statusList => {
    this.setState({ loading: false, statusList });
  };

  handleError = () => {
    this.setState({ loading: false, statusList: null });
  };

  render() {
    const { user } = this.props;
    if (this.state.loading) return <div>Loading...</div>;
    if (!this.state.statusList) return <div>No tweets found</div>;
    console.log(this.state.statusList);

    return (
      <FeedContainer>
        <FeedTabs>
          <StyledLink activeClassName="active" to={`/${user}/tweet`}>
            Tweets
          </StyledLink>
          <StyledLink activeClassName="active" to={`/${user}/with_replies`}>
            Tweets & replies
          </StyledLink>
          <StyledLink activeClassName="active" to={`/${user}/media`}>
            Media
          </StyledLink>
        </FeedTabs>
        {this.state.statusList.map(tweet => (
          <Tweet
            avatar={tweet.account.avatar_static}
            username={tweet.account.username}
            name={tweet.account.display_name}
            time={tweet.created_at}
            stat={{
              comment: 0,
              retweet: tweet.reblogs_count,
              like: tweet.favourites_count,
              message: 0,
              liked: tweet.favourited,
            }}
            big={tweet.textSize === 'big'}
          >
            <div dangerouslySetInnerHTML={{ __html: tweet.content }} />
            {tweet.media_attachments &&
              tweet.media_attachments.length > 0 &&
              tweet.media_attachments.map(image => (
                <img src={image.preview_url} alt={image.description} />
              ))}
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
  }
}

export default Feed;
