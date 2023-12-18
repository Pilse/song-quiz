import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Layout/Row/Row';
import Bar from './Bar/Bar';
import isMobile from '../../utils/window';

function Playing({ playing, onClick }) {
  return (
    <Row align="center" gap={isMobile() ? 10 : 17} onClick={onClick}>
      <Bar
        height={100 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1.1}
      />
      <Bar
        height={125 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1.3}
      />
      <Bar
        height={167 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={0.7}
      />
      <Bar
        height={144 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1}
      />
      <Bar
        height={100 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1.1}
      />
      <Bar
        height={64 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={0.9}
      />
      <Bar
        height={182 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1}
      />
      <Bar
        height={100 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1.2}
      />
      <Bar
        height={74 * (isMobile() ? 0.7 : 1)}
        playing={playing}
        duration={1.4}
      />
    </Row>
  );
}

Playing.propTypes = {
  playing: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Playing.defaultProps = {
  onClick: undefined,
};

export default Playing;
