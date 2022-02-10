import React from 'react';
import PropTypes from 'prop-types';

import formatLinksInText from '../../../../utils/formatLinksInText';

import { StyledCol, StyledParagraph, ChatMessage } from './ChatList.style';

function ChatList({ nickname, message, isMyMessage }) {
  return (
    <StyledCol width="100%" gap={4} padding="15px">
      <StyledParagraph
        {...{ isMyMessage }}
        textStyle="Paragraph6"
        text={nickname}
      />

      <ChatMessage dangerouslySetInnerHTML={formatLinksInText(message)} />
    </StyledCol>
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
