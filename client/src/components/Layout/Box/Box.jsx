import React from 'react';
import PropTypes from 'prop-types';

import { BoxLayout } from './Box.style';

function Box({ type, column, gap, children }) {
  return <BoxLayout {...{ type, column, gap }}>{children}</BoxLayout>;
}

Box.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  column: PropTypes.bool,
  gap: PropTypes.number,
};

Box.defaultProps = {
  column: false,
  gap: null,
};

export default Box;
