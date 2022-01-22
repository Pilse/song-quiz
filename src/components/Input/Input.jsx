import React from 'react';
import PropTypes from 'prop-types';

import { InputLayout, TextInput, ErrorParagraph } from './Input.style';

function Input({ placeholder, error, value, onChangeHandler }) {
  return (
    <InputLayout {...{ error }}>
      <TextInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChangeHandler={onChangeHandler}
        {...{ error }}
      />

      <ErrorParagraph> {error} </ErrorParagraph>
    </InputLayout>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};

Input.defaultProps = {
  error: null,
  value: '',
};

export default Input;
