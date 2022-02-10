import React from 'react';
import PropTypes from 'prop-types';

import { GAME } from '../../../utils/costants';

import Paragraph from '../../Paragraph/Paragraph';
import ChatList from './ChatList/ChatList';

function ChatLists({ chatLists, userNickname }) {
  return chatLists.map((chat, index) => (
    <React.Fragment key={index.toString() + chat.nickname}>
      {chat.type === GAME.TYPE.NOTICE ? (
        <Paragraph
          align="center"
          color="Primary"
          textStyle="Paragraph3"
          text={chat.message}
        />
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
