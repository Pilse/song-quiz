import React from 'react';
import PropTypes from 'prop-types';

import UserList from './UserList/UserList';

import { StyledCol } from './UserLists.style';

function UsetLists({ userLists }) {
  return (
    <StyledCol width="100%" height="100%" gap={10} padding="10px 5px">
      {userLists.map(user => (
        <UserList
          key={user.nickname}
          nickname={user.nickname}
          score={user.score}
        />
      ))}
    </StyledCol>
  );
}

UsetLists.propTypes = {
  userLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsetLists;
