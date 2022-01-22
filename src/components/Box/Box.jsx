import React from 'react';
import PropTypes from 'prop-types';

import { BoxLayout } from './Box.style';

function Box({ size, children }) {
  return <BoxLayout {...{ size }}>{children}</BoxLayout>;
}

Box.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Box;
