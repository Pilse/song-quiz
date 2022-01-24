import React from 'react';
import PropTypes from 'prop-types';

import { GAME } from '../../utils/costants';

import Box from '../Box/Box';
import Button from '../Button/Button';
import NoticeLabel from '../Label/NoticeLabel/NoticeLabel';

import {
  GameSetLayout,
  GameSetInfoBox,
  WinnerParagraph,
} from './GameSet.style';

function GameSet({ winner }) {
  return (
    <GameSetLayout>
      <Box column>
        <GameSetInfoBox>
          <NoticeLabel size="lg" text={GAME.GAMESET} />

          <WinnerParagraph>{winner} 승리</WinnerParagraph>

          <Button text={GAME.HOME} />
        </GameSetInfoBox>
      </Box>
    </GameSetLayout>
  );
}

GameSet.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default GameSet;
