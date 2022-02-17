import React from 'react';
import PropTypes from 'prop-types';

import { BarLayout } from './Bar.style';

function Bar({ height, playing, duration }) {
  return <BarLayout {...{ height, playing, duration }} />;
}

Bar.propTypes = {
  height: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Bar;
