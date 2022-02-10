import React from 'react';
import PropTypes from 'prop-types';

import { ColLayout } from './Col.style';

function Col({
  flex,
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
    <ColLayout
      {...{ flex, width, height, justify, align, gap, padding }}
      className={className}
    >
      {children}
    </ColLayout>
  );
}

Col.propTypes = {
  flex: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.number,
  padding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Col.defaultProps = {
  flex: null,
  width: 'auto',
  height: 'auto',
  justify: 'unset',
  align: 'unset',
  gap: 0,
  padding: '0',
  className: null,
  children: null,
};

export default Col;
