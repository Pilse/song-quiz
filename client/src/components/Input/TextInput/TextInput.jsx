import React from 'react';
import PropTypes from 'prop-types';

import { TextInputLayout, Input, ErrorParagraph } from './TextInput.style';

function TextInput({ placeholder, type, error, value, onChangeHandler }) {
  return (
    <TextInputLayout {...{ error }}>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        {...{ error }}
      />

      <ErrorParagraph> {error} </ErrorParagraph>
    </TextInputLayout>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: 'text',
  error: null,
  value: '',
};

export default TextInput;
