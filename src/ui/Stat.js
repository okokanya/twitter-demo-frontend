import React from 'react';
import styled from 'styled-components';

const StatContainer = styled.div`
  padding: 0 10px;
  border-bottom: 3px solid ${props => (props.active ? '#1da1f2' : 'white')};
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  color: #66757f;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: 20px;

  :hover {
    border-bottom-color: #1da1f2;
  }
`;

const StatTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  flex-grow: 1;
  line-height: 30px;
`;

const StatNumber = styled.div`
  flex-grow: 1;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 15px;
  color: ${props => (props.active ? '#1da1f2' : '#66757F')};
`;

const Stat = ({ number, active, title }) => (
  <StatContainer active={active}>
    <StatTitle>{title}</StatTitle>
    <StatNumber active={active}>{number}</StatNumber>
  </StatContainer>
);

export default Stat;
