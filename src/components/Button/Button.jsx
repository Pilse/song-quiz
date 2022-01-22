import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLayout } from './ButtonLayout.style';

function Button({ text }) {
  return <ButtonLayout>{text}</ButtonLayout>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
