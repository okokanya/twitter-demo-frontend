import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  border: 4px solid transparent;
  height: ${props => props.small ? '50px' : '80px'};
  width: ${props => props.small ? '50px' : '80px'
  };
  border-radius: ${props => props.small ? 0 : '6px'};
  position: relative;
`;

const Picture = ({ small, src }) => (
  <Wrapper small={small}>
    <img src={src} alt="🐶" height="100%" />
  </Wrapper>
);

export default Picture;
