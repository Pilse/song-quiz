import React from 'react';
import PropTypes from 'prop-types';

import { GAME } from '../../../../utils/costants';
import Row from '../../../Layout/Row/Row';
import Col from '../../../Layout/Col/Col';
import Button from '../../../Button/Button';

import { TextButton } from './GameMenuTemplate.style';

function GameMenuTemplate({
  selectedCategory,
  onChangeHandler,
  onClickHandler,
  children,
}) {
  return (
    <Col width="min(700px, 50vw)" justify="center" align="center" gap={33}>
      <Row width="100%" justify="center" gap={50}>
        <TextButton
          className={selectedCategory === GAME.SETTING ? 'selected' : ''}
          onClick={() => onChangeHandler(GAME.SETTING)}
        >
          {GAME.SETTING}
        </TextButton>

        <TextButton
          className={selectedCategory === GAME.GAMEINFO ? 'selected' : ''}
          onClick={() => onChangeHandler(GAME.GAMEINFO)}
        >
          {GAME.GAMEINFO}
        </TextButton>
      </Row>

      {children}

      <Button text="확인" onClickHandler={onClickHandler} />
    </Col>
  );
}

GameMenuTemplate.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default GameMenuTemplate;
