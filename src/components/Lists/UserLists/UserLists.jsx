import React from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList/UserList';

import { UserListsLayout } from './UserLists.style';

function UsetLists({ userLists }) {
  return (
    <UserListsLayout>
      {userLists.map(user => (
        <UserList nickname={user.nickname} score={user.score} />
      ))}
    </UserListsLayout>
  );
}

UsetLists.propTypes = {
  userLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsetLists;
