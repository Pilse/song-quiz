import React from 'react';
import PropTypes from 'prop-types';

import { Textarea } from './TextareaInput.style';

function TextareaInput({ placeholder, value, onChangeHandler }) {
  return (
    <Textarea
      spellcheck={false}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
}

TextareaInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

TextareaInput.defaultProps = {
  value: '',
};

export default TextareaInput;
