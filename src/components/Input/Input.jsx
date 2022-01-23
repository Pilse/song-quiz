import React from 'react';
import PropTypes from 'prop-types';

import { InputLayout, TextInput, ErrorParagraph } from './Input.style';

function Input({ placeholder, type, error, value, onChangeHandler }) {
  return (
    <InputLayout {...{ error }}>
      <TextInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        {...{ error }}
      />

      <ErrorParagraph> {error} </ErrorParagraph>
    </InputLayout>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  error: null,
  value: '',
};

export default Input;
