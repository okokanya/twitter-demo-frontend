import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Profile from './Pages/Profile';
import SomePage from './somePage';
import './App.css';

const Body = styled.div`
  min-width: 1200px;
  background-color: white;
  margin: auto;
  margin: 0;
  padding: 0;
`;

const App = () => (
  <BrowserRouter>
    <Body>
      <Header />
      <Switch>
        <Route path="/i" component={SomePage} />
        <Route path="/hashtags" component={SomePage} />
        <Route path="/trends" component={SomePage} />
        <Route exact path="/:user/with_replies" component={Profile} />
        <Route exact path="/:user/media" component={Profile} />
        <Route exact path="/:user/following" component={Profile} />
        <Route exact path="/:user/followers" component={Profile} />
        <Route exact path="/:user/likes" component={Profile} />
        <Route exact path="/:user" component={Profile} />
        <Redirect to="/EveryInteract" />
      </Switch>
    </Body>
  </BrowserRouter>
);
export default App;
