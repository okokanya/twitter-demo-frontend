import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: flex;
  position: relative;
  border: 1px solid #E1E8ED;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  margin-top: 10px;
`;

const TextBlock = styled.div `
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: .5px solid #E1E8ED;
`;

const Header = styled.h3 `
  font-size: 14px;
  margin: 0;
`;

const Text = styled.div `
  font-size: 12px;
  flex: 1 1 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Link = styled.a `
  font-size: 12px;
  color: grey;
`;

const Embed = ({ img, title, text, link, linkUrl }) => (
  <Wrapper>
    <img src={img} alt="embed" height="100px" />
    <TextBlock>
      <Header>{title}</Header>
      <Text>{text}</Text>
      <Link href={linkUrl}>{link}</Link>
    </TextBlock>
  </Wrapper>
);

export default Embed;
