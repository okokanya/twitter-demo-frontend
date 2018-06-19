import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import {
  Home,
  Moments,
  Notifications,
  Messages,
  TwitterIcon
} from '../ui/Icon.js';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import SearchInput from '../ui/SearchInput';

const HeaderNav = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: white;
  position: relative;
`;

const HeaderNavBlock = styled.div `
  display: flex;
  div {
    margin: 0 10px;
  }
`;

const HeaderNavItem = styled.div `
  display: flex;
  color: #66757F;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  word-spacing: 5px;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
`;

const TwitterLogo = styled.div `
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
`;

const Header = () => (
  <Container>
    <HeaderNav>
      <HeaderNavBlock>
        <HeaderNavItem><Home />Home</HeaderNavItem>
        <HeaderNavItem><Moments />Moments</HeaderNavItem>
        <HeaderNavItem><Notifications />Notifications</HeaderNavItem>
        <HeaderNavItem><Messages />Messages</HeaderNavItem>
      </HeaderNavBlock>
      <HeaderNavBlock>
        <SearchInput />
        <Avatar small />
        <Button blue>Tweet</Button>
      </HeaderNavBlock>
      <TwitterLogo>
        <TwitterIcon />
      </TwitterLogo>
    </HeaderNav>
  </Container>
);

export default Header;

// import React, {Component} from 'react';
// import styled from 'styled-components';
// import Button from '../ui/Button.js';
// import '../App.css';
// import avatar from '../img/avatar.png';
// import headerImg from '../img/headerImg.png';
// import {
//   Home,
//   Moments,
//   Notifications,
//   Messages,
//   TwitterIcon,
//   Avatar
// } from '../ui/Icon.js';

// const HeaderImg = styled.div `
// height: 380px;
// width: 100%;
// background-image: url(${headerImg});
// background-size: cover;
// background-position-y: -170px;
// background-repeat: no-repeat;
// `;

// const Input = styled.input `
// border-radius: 5px;
// border: 1px solid #e6ecf0;
// font-size: 10px;
// padding: 5px;
// background-color: #ffffff;
// placeholder: "Search Twitter 🔍 ";
// `

// const HeaderNav = styled.nav `
// display: flex;
// flex-wrap: nowrap;
// height: 45px;
// width: 800px;
// margin: auto;
// justify-content: space-around;
// align-items: center;
// `;

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <HeaderNav>
//           <a><Home />Home</a>
//           <a><Moments />Moments</a>
//           <a><Notifications />Notifications</a>
//           <a><Messages />Messages</a>
//           <a><TwitterIcon /></a>
//           <Input placeholder="Search Twitter 🔍 " />
//           <Avatar />
//           <Button blue>Tweet</Button>
//         </HeaderNav>
//         <HeaderImg />
//       </div>
//     );
//   }
// }

// export default Header;
