import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button `
margin: 12px 4px;
padding: 4px 8px;
border-radius: 12px;
background-color: ${props => props.blue ? '#1da1f2' : 'white'};
color: ${props => props.blue ? "white" : "#1da1f2"};
border-color: ${props => props.blue ? "#1da1f2" : "#e6ecf0"};
cursor: pointer;
margin-right: 16px;
`;

export default Button;
