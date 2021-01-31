import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from "framer-motion";

const InputBase = styled.input`
    max-width: 100vw;
    width: 400px;
    padding: 15px;
    padding-left: 0px;
    font-size: 24px;
    border: none;
    border-bottom: 3px solid #FFFFFF;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: transparent;
    border-radius: 0;
    outline: 0;
    margin-bottom: 25px;

    &::placeholder {
      color: white;
      opacity: 0.5;
    }
`;

const InputIcon = styled.div`
  width: 100%;
  max-width: 7px;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export default function Input(props) {
  return (
    <InputDiv>
      {/* <InputIcon 
        as={motion.div}
        transition={{ delay: 1, duration: 0.7, restSpeed: 0.7, repeat: "Infinity", ease: "anticipate" }}
        variants={{
          show: { opacity: 1},
          hidden: { opacity: 0},
        }}
        initial="hidden"
        animate="show"
      /> */}
      <InputBase {...props}/>
    </InputDiv>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
