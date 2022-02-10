import React from 'react';
import PropTypes from 'prop-types';

import { RowLayout } from './Row.style';

function Row({
  width,
  height,
  justify,
  align,
  gap,
  padding,
  className,
  children,
}) {
  return (
    <RowLayout
      {...{ width, height, justify, align, padding, gap }}
      className={className}
    >
      {children}
    </RowLayout>
  );
}

Row.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.number,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Row.defaultProps = {
  width: 'auto',
  height: 'auto',
  justify: 'unset',
  align: 'unset',
  gap: 0,
  padding: '0',
  className: null,
  children: null,
};

export default Row;
