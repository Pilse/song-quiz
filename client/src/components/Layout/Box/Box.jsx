import React from 'react';
import PropTypes from 'prop-types';

import { BoxLayout } from './Box.style';

function Box({ type, column, gap, onClick, children }) {
  return <BoxLayout {...{ type, column, gap, onClick }}>{children}</BoxLayout>;
}

Box.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  column: PropTypes.bool,
  gap: PropTypes.number,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  column: false,
  gap: null,
  onClick: undefined,
};

export default Box;
