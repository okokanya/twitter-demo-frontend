import styled from 'styled-components';

const Button = styled.button `
  padding: 0 20px;
  border-radius: 20px;
  background-color: ${props => props.blue ? '#1da1f2' : 'white'};
  color: ${props => props.blue ? "white" : "#1da1f2"};
  border-color: #1da1f2;
  border-width: 2px;
  cursor: pointer;
  margin-right: 16px;
  font-size: 14px;
  line-height: 34px;
  height: 36px;
`;

export default Button;
