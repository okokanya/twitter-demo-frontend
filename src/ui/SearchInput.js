import styled from 'styled-components';
import magnifier from '../img/magnifier.png';

const SearchInput = styled.input `
  background: url(${magnifier}) center right 10px no-repeat;
  background-size: auto 50%;
  padding: 10px 30px 10px 10px;
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 20px;
  width: 180px;

  :focus {
    outline: none;
    border-color: #1da1f2;
  }
`;

export default SearchInput;
