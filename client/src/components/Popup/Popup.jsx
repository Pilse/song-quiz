import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Layout/Box/Box';

import { AbsoluteCol } from './Popup.style';
import isMobile from '../../utils/window';

function Popup({ children }) {
  return (
    <AbsoluteCol
      width="100%"
      height="100%"
      justify="center"
      align="center"
      padding={isMobile() && '0 10px'}
    >
      <Box column type={isMobile() ? 'stretch' : 'free'}>
        {children}
      </Box>
    </AbsoluteCol>
  );
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popup;
