import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Feed from '../Feed/Feed';
import ProfileDescription from '../ProfileDescription';
import LinksBlock from '../LinksBlock';
import Container from '../Ui/Container';
import Button from '../Ui/Button';
import Stat from '../Ui/Stat';
import { More } from '../Ui/Icon';

const Statistic = styled.div`
  height: 60px;
  border-bottom: 2px solid #c5cdd2b0;
  background: white;
`;

const Content = styled.div`
  background: #e6ecf0;
  padding-top: 8px;
`;

const HeaderImg = styled.div`
  height: 380px;
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position-y: -230px;
  background-repeat: no-repeat;
`;
const ErrorMessage = styled.div`
  font-size: 24px;
  margin-top: 48px;
  color: pink;
  font-weight: bold;
`;
const RightBlock = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const StatBlock = styled.div`
  display: flex;
`;

class Profile extends React.Component {
  state = {
    loading: true,
    user: null,
  };

  componentDidMount() {
    const userId = this.props.match.params.user;
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${userId}?access_token=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then(res => {
        this.handleGetUser(res.data);
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  get loadingMessage() {
    return (
      <Container>
        <ErrorMessage>loading</ErrorMessage>
      </Container>
    );
  }
  get error404Message() {
    return (
      <Container>
        <ErrorMessage>404 error</ErrorMessage>
      </Container>
    );
  }

  handleGetUser = user => {
    this.setState({ loading: false, user });
  };

  handleError = () => {
    this.setState({ loading: false, user: null });
  };

  render() {
    const { match } = this.props;
    const { user, loading } = this.state;
    console.log(user);
    if (loading) return this.loadingMessage;
    if (!user) return this.error404Message;
    return (
      <div>
        <HeaderImg src={user.header_static} />
        <Statistic>
          <Container>
            <Container small>
              <StatBlock>
                <Stat
                  number={user.statuses_count}
                  title="Tweets"
                  to={`/${match.params.user}`}
                />
                <Stat
                  number={user.following_count}
                  title="Following"
                  to={`/${match.params.user}/following`}
                />
                <Stat
                  number={user.followers_count}
                  title="Followers"
                  to={`/${match.params.user}/followers`}
                />
                <Stat
                  number={0}
                  title="Likes"
                  to={`/${match.params.user}/likes`}
                />
                <Stat
                  number={0}
                  title="Lists"
                  to={`/${match.params.user}/lists`}
                />
              </StatBlock>
            </Container>
            <RightBlock>
              <Button>Follow</Button>
              <More />
            </RightBlock>
          </Container>
        </Statistic>
        <Content>
          <Container>
            <ProfileDescription user={user} />
            <Container small>
              <Feed user={match.params.user} />
            </Container>
            <LinksBlock />
          </Container>
        </Content>
      </div>
    );
  }
}

export default Profile;
