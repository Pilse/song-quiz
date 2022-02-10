import React from 'react';
import PropTypes from 'prop-types';

import { BoxLayout } from './Box.style';

function Box({ size, column, gap, children }) {
  return <BoxLayout {...{ size, column, gap }}>{children}</BoxLayout>;
}

Box.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  column: PropTypes.bool,
  gap: PropTypes.number,
};

Box.defaultProps = {
  column: false,
  gap: null,
};

export default Box;
