import styled from 'styled-components';

const Avatar = styled.div`
  background-image: url(${props => props.src});
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: none;
  border-radius: 50%;
  height: ${props => {
    if (props.big) return '200px';
    if (props.middle) return '80px';
    return '30px';
  }};
  width: ${props => {
    if (props.big) return '200px';
    if (props.middle) return '80px';
    return '30px';
  }};
  box-shadow: ${props =>
    props.big ? '2px 0px 30px -8px rgba(0,0,0,0.75)' : 'none'};
  border: ${props => (props.big ? '8px solid white' : 'none')};
  cursor: pointer;
`;

export default Avatar;
