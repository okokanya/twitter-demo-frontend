import React from 'react';
import styled from 'styled-components';

import RightSideBlock from './Ui/RightSideBlock';
import WhoToFollow from './Ui/WhoToFollow';
import Trend from './Ui/Trend';

import re1 from './img/re1.png';
import re2 from './img/re2.png';
import re3 from './img/re3.png';

const Wrapper = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  width: 290px;

`;

const LinksBlock = () => (
  <Wrapper>
    <RightSideBlock title="Who to follow">
      <WhoToFollow img={re1} name="AppleInsider" username="appleinsider"/>
      <WhoToFollow img={re2} name="Creode" username="Creode"/>
      <WhoToFollow img={re3} name="Epiphany Search" username="Epiphanyфываф"/>


    </RightSideBlock>
    <RightSideBlock title="United Kingdom Trends">
      <Trend link="">
      </Trend>
    </RightSideBlock>
  </Wrapper>
);

export default LinksBlock;
