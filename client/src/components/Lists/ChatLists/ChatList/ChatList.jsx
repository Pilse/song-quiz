import React from 'react';
import PropTypes from 'prop-types';

import formatLinksInText from '../../../../utils/formatLinksInText';

import {
  ChatListLayout,
  NicknameParagraph,
  MessageParagraph,
} from './ChatList.style';

function ChatList({ nickname, message, isMyMessage }) {
  return (
    <ChatListLayout>
      <NicknameParagraph {...{ isMyMessage }}>{nickname}</NicknameParagraph>

      <MessageParagraph dangerouslySetInnerHTML={formatLinksInText(message)} />
    </ChatListLayout>
  );
}

ChatList.propTypes = {
  nickname: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isMyMessage: PropTypes.bool,
};

ChatList.defaultProps = {
  isMyMessage: false,
};

export default ChatList;
