import React from 'react';
import PropTypes from 'prop-types';

import formatLinksInText from '../../../../utils/formatLinksInText';

import Col from '../../../Layout/Col/Col';

import { StyledCol, StyledParagraph, ChatMessage } from './ChatList.style';

function ChatList({ nickname, message, isMyMessage }) {
  return (
    <Col width="100%" align={isMyMessage ? 'flex-end' : 'unset'}>
      {!isMyMessage && (
        <StyledParagraph textStyle="Paragraph6" text={nickname} />
      )}

      <StyledCol {...{ isMyMessage }} width="100%" gap={10} padding="15px">
        <ChatMessage
          {...{ isMyMessage }}
          dangerouslySetInnerHTML={formatLinksInText(message)}
        />
      </StyledCol>
    </Col>
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
