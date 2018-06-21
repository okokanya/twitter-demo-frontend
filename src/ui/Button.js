import styled from 'styled-components';

const Button = styled.button `
  padding: 0 20px;
  border-radius: 20px;
  display: ${props => props.block ? 'block' : 'inline'};
  background-color: ${props => props.blue ? '#1da1f2' : 'white'};
  color: ${props => props.blue ? "white" : "#1da1f2"};
  flex-grow: ${props => props.block ? '1' : 'none'};
  border-color: #1da1f2;
  border-width: 2px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  line-height: 32px;
  height: 36px;
`;

export default Button;
