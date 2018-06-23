import styled from 'styled-components';
import { color } from './Colors';


const Button = styled.button `
  padding: 0 20px;
  border-radius: 20px;
  display: ${props => props.block
    ? 'block'
    : 'inline'};
  background-color: ${props => props.blue
    ? color.blue
    : 'white'};
  color: ${props => props.blue
    ? "white"
    : "color.blue"};
  flex-grow: ${props => props.block
    ? '1'
    : 'none'};
  border-color: ${color.blue};
  border-width: 2px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  line-height: 32px;
  height: 36px;
`;

export default Button;
