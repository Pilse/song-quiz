import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Layout/Row/Row';
import Bar from './Bar/Bar';

function Playing({ playing }) {
  return (
    <Row align="center" gap={17}>
      <Bar height={100} playing={playing} duration={1.1} />
      <Bar height={125} playing={playing} duration={1.3} />
      <Bar height={167} playing={playing} duration={0.7} />
      <Bar height={144} playing={playing} duration={1} />
      <Bar height={100} playing={playing} duration={1.1} />
      <Bar height={64} playing={playing} duration={0.9} />
      <Bar height={182} playing={playing} duration={1} />
      <Bar height={100} playing={playing} duration={1.2} />
      <Bar height={74} playing={playing} duration={1.4} />
    </Row>
  );
}

Playing.propTypes = {
  playing: PropTypes.bool.isRequired,
};

export default Playing;
