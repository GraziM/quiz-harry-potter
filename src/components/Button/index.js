import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Button = styled.button.attrs({
  as: motion.button,
  whileHover: { scale: 1.05 },
  whileTap: { scale:0.95 },
})`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #FFFFFF;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: transparent;
    color: #979797;
    border: 1px solid #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
