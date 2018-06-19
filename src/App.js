import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './header/Header';
import Container from './ui/Container';

const Body = styled.div `
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
      <Body>
        <Header />
      </Body>
    );
  }
}

export default App;
