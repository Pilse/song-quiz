import React, { useState } from 'react';

import { GAME } from '../../utils/costants';

import Icon from '../../components/Icon/Icon';
import TextareaInput from '../../components/Input/TextareaInput/TextareaInput';
import UserLists from '../../components/Lists/UserLists/UserLists';
import ChatList from '../../components/Lists/ChatList/ChatList';
import NoticeLabel from '../../components/Label/NoticeLabel/NoticeLabel';

import {
  GameLayout,
  QuizBox,
  QuizInfoBox,
  CodeBox,
  CodeParagraph,
  QuizParagraph,
  UserBox,
  UsersParagraph,
  ChatBox,
  ChatLogBox,
  ChatInputBox,
} from './Game.style';

import sampleUsers from './sampleUser';
import sampleChat from './sampleChat';

function Game() {
  const [quizMessage, setQuizMessage] = useState(GAME.START);
  const [chats, setChats] = useState(sampleChat);

  return (
    <GameLayout>
      <QuizBox>
        <Icon name="logo_large" />

        <QuizInfoBox>
          <CodeBox>
            <CodeParagraph>{GAME.CODE}</CodeParagraph>

            <CodeParagraph>dsfu9nha30j</CodeParagraph>
          </CodeBox>

          <Icon name="play" clickable />

          <QuizParagraph>{quizMessage}</QuizParagraph>
        </QuizInfoBox>
      </QuizBox>

      <UserBox>
        <UsersParagraph>{GAME.USERS}(3)</UsersParagraph>

        <UserLists userLists={sampleUsers} />
      </UserBox>

      <ChatBox>
        <ChatLogBox>
          {chats.map(chat =>
            chat.type === GAME.TYPE.NOTICE ? (
              <NoticeLabel size="sm" text={chat.message} />
            ) : (
              <ChatList nickname={chat.nickname} message={chat.message} />
            ),
          )}
        </ChatLogBox>

        <ChatInputBox>
          <TextareaInput placeholder="답을 입력해주세요" />
        </ChatInputBox>
      </ChatBox>
    </GameLayout>
  );
}

export default Game;
