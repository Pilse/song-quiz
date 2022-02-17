import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { GAME } from '../../../../utils/costants';
import Col from '../../../Layout/Col/Col';
import Paragraph from '../../../Paragraph/Paragraph';
import Button from '../../../Button/Button';

function GameEndTemplate({ winner }) {
  const navigate = useNavigate();

  return (
    <Col width="min(700px, 50vw)" justify="center" align="center" gap={33}>
      <Paragraph
        align="center"
        color="Primary"
        textStyle="Paragraph2"
        text={GAME.GAMESET}
      />

      <Paragraph
        align="center"
        textStyle="Paragraph2"
        text={`${winner} 승리`}
      />

      <Button text={GAME.HOME} onClickHandler={() => navigate('/')} />
    </Col>
  );
}

GameEndTemplate.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default GameEndTemplate;
