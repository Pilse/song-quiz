import React from 'react';
import PropTypes from 'prop-types';

import { GAME, INFO } from '../../../../utils/costants';
import Col from '../../../Layout/Col/Col';
import Paragraph from '../../../Paragraph/Paragraph';
import Button from '../../../Button/Button';
import InfoList from '../../../Lists/InfoList/InfoList';

import { StyledCol } from './GameInfoTemplate.style';

function GameInfoTemplate({ onClickHandler }) {
  return (
    <Col width="min(700px, 50vw)" justify="center" align="center" gap={33}>
      <Paragraph
        align="center"
        color="Primary"
        textStyle="Paragraph2"
        text={GAME.GAMEINFO}
      />

      <StyledCol height="min(600px, 50vh)" gap={32} padding="16px">
        <InfoList icon="info_play" descriptions={INFO.PLAY} />
        <InfoList icon="info_answer" descriptions={INFO.ANSWER} />
        <InfoList icon="info_game" descriptions={INFO.GAME} />
      </StyledCol>

      <Button text="확인" onClickHandler={onClickHandler} />
    </Col>
  );
}

GameInfoTemplate.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default GameInfoTemplate;
