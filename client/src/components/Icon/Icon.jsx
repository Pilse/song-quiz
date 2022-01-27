import React from 'react';
import PropTypes from 'prop-types';

import { IconLayout, IconBox } from './Icon.style';

function Icon({ name, clickable, onClickHandler }) {
  return (
    <IconLayout>
      <IconBox
        src={`/assets/icons/${name}.svg`}
        alt={name}
        {...{ clickable }}
        onClick={onClickHandler}
      />
    </IconLayout>
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
