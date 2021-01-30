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

const LogoQuiz = styled.img;

function Logo({ className }) {
  return (
    <>
      <LogoImage />
    </>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
