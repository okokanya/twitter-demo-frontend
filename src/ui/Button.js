import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button `
  padding: 0 20px;
  border-radius: 20px;
  background-color: ${props => props.blue ? '#1da1f2' : 'white'};
  color: ${props => props.blue ? "white" : "#1da1f2"};
  border-color: ${props => props.blue ? "#1da1f2" : "#e6ecf0"};
  cursor: pointer;
  margin-right: 16px;
  font-size: 14px;
  line-height: 36px;
  height: 36px;
`;

export default Button;
