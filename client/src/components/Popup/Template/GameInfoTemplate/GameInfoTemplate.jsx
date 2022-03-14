import React from 'react';

import { INFO } from '../../../../utils/costants';
import Col from '../../../Layout/Col/Col';
import InfoList from '../../../Lists/InfoList/InfoList';

import { StyledCol } from './GameInfoTemplate.style';

function GameInfoTemplate() {
  return (
    <Col>
      <StyledCol height="min(600px, 50vh)" gap={32} padding="16px">
        <InfoList icon="info_play" descriptions={INFO.PLAY} />
        <InfoList icon="info_answer" descriptions={INFO.ANSWER} />
        <InfoList icon="info_game" descriptions={INFO.GAME} />
      </StyledCol>
    </Col>
  );
}

export default GameInfoTemplate;
