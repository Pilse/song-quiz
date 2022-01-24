import React from 'react';
import PropTypes from 'prop-types';

import { GAME } from '../../../utils/costants';

import NoticeLabel from '../../Label/NoticeLabel/NoticeLabel';
import ChatList from './ChatList/ChatList';

function ChatLists({ chatLists }) {
  return chatLists.map((chat, index) => (
    <React.Fragment key={index.toString() + chat.nickname + chat.message}>
      {chat.type === GAME.TYPE.NOTICE ? (
        <NoticeLabel size="sm" text={chat.message} />
      ) : (
        <ChatList nickname={chat.nickname} message={chat.message} />
      )}
    </React.Fragment>
  ));
}

ChatLists.propTypes = {
  chatLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLists;
