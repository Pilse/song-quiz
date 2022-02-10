import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLayout } from './ButtonLayout.style';

function Button({ text, onClickHandler }) {
  return <ButtonLayout onClick={onClickHandler}>{text}</ButtonLayout>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
