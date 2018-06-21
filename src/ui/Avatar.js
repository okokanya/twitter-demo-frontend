import styled from 'styled-components';
import avatar from '../img/avatar.png';

const Avatar = styled.div `
  background-image: url(${avatar});
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: none;
  border-radius: 50%;
  height: ${props => props.big
  ? '200px'
  : props.middle
    ? '80px'
    : '30px'};
  width: ${props => props.big
    ? '200px'
    : props.middle
      ? '80px'
      : '30px'};
  box-shadow: ${props => props.big
    ? "2px 0px 30px -8px rgba(0,0,0,0.75)"
    : "none"};
  border: ${props => props.big
    ? "8px solid white"
    : "none"};
  cursor: pointer;
`;

export default Avatar;
