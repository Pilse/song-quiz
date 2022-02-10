import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLayout } from './ButtonLayout.style';

function Button({ text, type, onClickHandler }) {
  return (
    <ButtonLayout {...{ type }} onClick={onClickHandler}>
      {text}
    </ButtonLayout>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'Primary',
};

export default Button;
