import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Profile from './Pages/Profile';
import SomePage from './SomePage';
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
        <Route path="/:user" component={Profile} />
        <Redirect to="/EveryInteract" />
      </Switch>
    </Body>
  </BrowserRouter>
);
export default App;
