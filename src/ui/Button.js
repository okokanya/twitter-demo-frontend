import styled from 'styled-components';
import colors from './colors';

const Button = styled.button`
  padding: 0 20px;
  border-radius: 20px;
  display: ${props => (props.block ? 'block' : 'inline')};
  background-color: ${props => (props.blue ? colors.blue : 'white')};
  color: ${props => (props.blue ? 'white' : colors.blue)};
  flex-grow: ${props => (props.block ? '1' : 'none')};
  border-color: ${colors.blue};
  border-width: 2px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  line-height: 32px;
  height: 36px;
`;

export default Button;
