import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Profile from './Pages/Profile';

import './App.css';

const Body = styled.div`
  min-width: 1200px;
  // background-color: #e6ecf0;
  background-color: white;
  margin: auto;
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Body>
          <Header />
          <Switch>
            <Route exact path="/EveryInteract" component={Profile} />
            <Redirect to="/EveryInteract" />
          </Switch>
        </Body>
      </BrowserRouter>
    );
  }
}

export default App;
