import React from 'react';
import styled, { css } from 'styled-components';
// Loading Modules

export default (props) => (
    <Container>
        <FlexCenterContainer isElement>{props.sentenceInFocus}</FlexCenterContainer>
    </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexCenterContainer = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  ${props => props.isElement && css`
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 15px;
  `}
`;

// const ClassButton = styled.button`
//   height: 4rem;
//   border: none;
//   background-color: #3D70B2;
//   color: white;
//   font-size: 2rem;
//   border-radius: 5px;
// `;
