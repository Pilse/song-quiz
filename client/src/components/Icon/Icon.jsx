import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Layout/Row/Row';

import { IconLayout } from './Icon.style';

function Icon({ name, clickable, onClickHandler }) {
  return (
    <Row justify="center">
      <IconLayout
        src={`/assets/icons/${name}.svg`}
        alt={name}
        {...{ clickable }}
        onClick={onClickHandler}
      />
    </Row>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

Icon.defaultProps = {
  clickable: false,
  onClickHandler: null,
};

export default Icon;
