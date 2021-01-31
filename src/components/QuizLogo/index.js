import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

const LogoImage = styled.img.attrs({
  src: 'https://www.nicepng.com/png/full/139-1390345_harry-potter-clipart-ico-harry-potter-logo-png.png',
})`
  max-height: 75px;
  width: auto;
  display: block;
  margin: 0 auto;
`;

const LogoText = styled.div`
  padding-top: 24px;
  width: 150%;
  color: #FFFFFF;
  font-size: 80px;
  font-family: 'Cormorant SC', serif;
  margin: 0;
  display: block;
  position: relative;
  right: 0;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`

const LogoQuiz = styled.img;

function Logo({ className }) {
  return (
    <section>
      <LogoText>Harry Potter <p style={{ padding: 0, margin: 0, color: `${({ theme }) => `${theme.colors.secondary}`}` }}>Quiz</p></LogoText>
    </section>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

// const QuizLogo = styled(Logo)`
//   margin: 0;
//   display: block;
//   position: relative;
//   right: 0;
//   @media screen and (max-width: 500px) {
//     margin: 0;
//   }
// `;

export default LogoText;
