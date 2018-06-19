import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import headerImg from '../img/headerImg.png';

// const HeaderNav = styled.div `
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 50px;
//   padding: 0 20px;
//   background: white;
//   position: relative;
// `;

// const HeaderNavBlock = styled.div `
//   display: flex;
//   align-items: center;
//   div {
//     margin: 0 10px;
//   }
// `;

// const HeaderNavItem = styled.div `
//   display: flex;
//   color: #66757F;
//   font-size: 13px;
//   font-weight: 500;
//   line-height: 20px;
//   word-spacing: 5px;
//   cursor: pointer;
//   svg {
//     margin-right: 5px;
//   }
//   :hover {
//     opacity: .5;
//   }
// `;

// const TwitterLogo = styled.div `
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   left: 0;
//   right: 0;
//   margin: auto;
//   top: 0;
//   bottom: 0;
// `;

const Statistic = styled.div `
  height: 60px;
  background: white;
  box-shadow: 0 4px 2px #B2BAC0;    
`;

const Content = styled.div `
  background: #E6ECF0;
  height: 200px;
`;
const HeaderImg = styled.div `
  height: 380px;
  width: 100%;
  background-image: url(${headerImg});
  background-size: cover;
  background-position-y: -230px;
  background-repeat: no-repeat;
`;
const Profile = () => (
  <div>
  <HeaderImg />
    <Statistic>
      <Container>
        Статистика
      </Container>
    </Statistic>
    <Content>
      <Container>
        Контент
      </Container>
    </Content>
  </div>
);

export default Profile;
