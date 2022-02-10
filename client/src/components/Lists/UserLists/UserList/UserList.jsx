import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon/Icon';

import { StyledRow, StyledParagraph, ScoreBox } from './UserList.style';

function UserList({ nickname, score }) {
  return (
    <StyledRow width="100%" align="center" gap={15} padding="15px 5px">
      <Icon name="user" />

      <StyledParagraph color="Black" textStyle="Paragraph3" text={nickname} />

      <ScoreBox>{score}</ScoreBox>
    </StyledRow>
  );
}

UserList.propTypes = {
  nickname: PropTypes.string.isRequired,
  score: PropTypes.number,
};

UserList.defaultProps = {
  score: null,
};

export default UserList;
