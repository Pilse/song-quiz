import React from 'react';
import PropTypes from 'prop-types';

import Col from '../../../Layout/Col/Col';
import Row from '../../../Layout/Row/Row';
import Icon from '../../../Icon/Icon';

import { RangeInput } from './GameSettingTemplate.style';

function GameSettingTemplate({ setting, onVolumeInputHandler }) {
  return (
    <Col width="100%" height="min(600px, 50vh)" gap={20} padding="16px">
      <Row gap={32}>
        <Icon name="setting_volume" />

        <RangeInput
          type="range"
          min={0}
          max={100}
          value={setting.volume}
          onInput={e =>
            onVolumeInputHandler(prev => ({
              ...prev,
              volume: Number(e.target.value),
            }))
          }
        />
      </Row>
    </Col>
  );
}

GameSettingTemplate.propTypes = {
  setting: PropTypes.objectOf({ volume: PropTypes.number }).isRequired,
  onVolumeInputHandler: PropTypes.func.isRequired,
};

export default GameSettingTemplate;
