import React from 'react';
import { Bars } from 'react-loader-spinner';

import { Colors } from '../../style/theme';

import { StyledCol } from './Loading.style';

function Loading() {
  return (
    <StyledCol>
      <Bars color={Colors.White} />
    </StyledCol>
  );
}

export default Loading;
