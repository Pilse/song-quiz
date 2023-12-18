import React from 'react';
import PropTypes from 'prop-types';

import { RowLayout } from './Row.style';

function Row({
  flex,
  width,
  height,
  justify,
  align,
  gap,
  padding,
  className,
  children,
  onClick,
}) {
  return (
    <RowLayout
      {...{ flex, width, height, justify, align, padding, gap, onClick }}
      className={className}
    >
      {children}
    </RowLayout>
  );
}

Row.propTypes = {
  flex: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.number,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Row.defaultProps = {
  flex: null,
  width: 'auto',
  height: 'auto',
  justify: 'unset',
  align: 'unset',
  gap: 0,
  padding: '0',
  className: null,
  children: null,
  onClick: undefined,
};

export default Row;
