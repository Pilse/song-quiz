import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon/Icon';

import { UserListLayout, NicknameParagraph, ScoreBox } from './UserList.style';

function UserList({ nickname, score }) {
  return (
    <UserListLayout>
      <Icon name="user" />

      <NicknameParagraph>{nickname}</NicknameParagraph>

      <ScoreBox>{score}</ScoreBox>
    </UserListLayout>
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
