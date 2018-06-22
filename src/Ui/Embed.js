import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  
`;

const Embed = ({ img, children }) => (
  <Wrapper>
    <img src={img} alt="embed" />
    <div>
      {children}
    </div>
  </Wrapper>
);

export default Embed;
