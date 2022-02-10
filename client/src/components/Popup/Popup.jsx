import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Layout/Box/Box';

import { AbsoluteCol } from './Popup.style';

function Popup({ children }) {
  return (
    <AbsoluteCol width="100%" height="100%" justify="center" align="center">
      <Box column size="lg">
        {children}
      </Box>
    </AbsoluteCol>
  );
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popup;
