import React from 'react';
import PropTypes from 'prop-types';

import { GAME } from '../../../utils/costants';

import NoticeLabel from '../../Label/NoticeLabel/NoticeLabel';
import ChatList from './ChatList/ChatList';

function ChatLists({ chatLists, userNickname }) {
  return chatLists.map((chat, index) => (
    <React.Fragment key={index.toString() + chat.nickname}>
      {chat.type === GAME.TYPE.NOTICE ? (
        <NoticeLabel size="sm" text={chat.message} />
      ) : (
        <ChatList
          nickname={chat.nickname}
          message={chat.message}
          isMyMessage={userNickname === chat.nickname}
        />
      )}
    </React.Fragment>
  ));
}

ChatLists.propTypes = {
  chatLists: PropTypes.arrayOf(PropTypes.object).isRequired,
  userNickname: PropTypes.string.isRequired,
};

export default ChatLists;
