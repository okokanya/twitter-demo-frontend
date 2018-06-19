import styled from 'styled-components';

const Container = styled.div `
  width: ${props => props.small ? 590 : 1200}px;
  margin: 0 auto;
  position: relative;
`;

export default Container;
