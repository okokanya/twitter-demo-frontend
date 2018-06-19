import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import {
  Home,
  Moments,
  Notifications,
  Messages,
  TwitterIcon,
  Avatar
} from '../ui/Icon.js';

//Это блок, внутри которого будет три — левое меню, знак твиттера, и правый с инпутом итд.
const HeaderNav = styled.div `
  display: flex;
  justify-content: space-between;
`;

//этот наверное просто дивом можно сделать, надо посмотреть. ему не нужен стиль даже =/
const HeaderNavBlock = sytled.div ``;

//Менюшка в которой инконка и надпись
const HeaderNavItem = styled.div `
`;

const Header = () => (
  <Container>
    <HeaderNav>
      <HeaderNavBlock>
        <HeaderNavItem><Home />Home</HeaderNavItem>
        <HeaderNavItem><Moments />Moments</HeaderNavItem>
      </HeaderNavBlock>
      <HeaderNavBlock>
        Лого твиттера
      </HeaderNavBlock>
      <HeaderNavBlock>
        {/*<SearchInput />
        <Avatar />
        <Button>Tweet</Button>*/}
      </HeaderNavBlock>
    </HeaderNav>
  </Container>
);

export default Header;

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
