import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 400px;
  margin: auto 10%;
  padding-top: 20px;
  background-color: "#FFFFFF";
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
