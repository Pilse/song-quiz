import React from 'react';
import PropTypes from 'prop-types';

import {
  ChatListLayout,
  NicknameParagraph,
  MessageParagraph,
} from './ChatList.style';

function ChatList({ nickname, message }) {
  return (
    <ChatListLayout>
      <NicknameParagraph>{nickname}</NicknameParagraph>

      <MessageParagraph>{message}</MessageParagraph>
    </ChatListLayout>
  );
}

ChatList.propTypes = {
  nickname: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatList;
