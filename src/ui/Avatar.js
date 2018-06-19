import styled from 'styled-components';
import avatar from '../img/avatar.png';

const Avatar = styled.div `
background-image: url(${avatar});
background-color: white;
background-position: center;
background-size: contain;
background-repeat: none;
/* border: solid white 4px; */
border-radius: 50%;
height: ${props => props.big ? '200px' : props.middle ? '80px' : '30px' };
width: ${props => props.big ? '200px' : props.middle ? '80px' : '30px' };
cursor: pointer;
`;

export default Avatar;
