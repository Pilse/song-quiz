import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { GAME } from '../../utils/costants';

import Icon from '../../components/Icon/Icon';
import TextareaInput from '../../components/Input/TextareaInput/TextareaInput';
import UserLists from '../../components/Lists/UserLists/UserLists';
import ChatLists from '../../components/Lists/ChatLists/ChatLists';

import {
  GameLayout,
  QuizBox,
  ButtonBox,
  QuizInfoBox,
  CodeBox,
  CodeParagraph,
  QuizParagraph,
  UserBox,
  UsersParagraph,
  ChatBox,
  ChatLogBox,
  ChatInputForm,
} from './Game.style';

import sampleUsers from './sampleUser';
import sampleChat from './sampleChat';

function Game() {
  const navigate = useNavigate();

  const chatRef = useRef();

  const [input, setInput] = useState();
  const [quizMessage, setQuizMessage] = useState(GAME.START);
  const [chatLists, setChatLists] = useState(sampleChat);
  const [userListsActive, setUserListsActive] = useState(false);

  useEffect(() => {
    chatRef.current.scrollTop =
      chatRef.current.scrollHeight - chatRef.current.clientHeight;
  }, [chatLists]);

  const onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();

      setChatLists(prev => [
        ...prev,
        {
          type: 'chat',
          nickname: 'sample',
          message: input,
        },
      ]);

      setInput();
    }
  };

  return (
    <GameLayout>
      <QuizBox>
        <ButtonBox>
          <Icon
            name="back_circle"
            clickable
            onClickHandler={() => navigate(-1)}
          />

          {userListsActive ? (
            <Icon
              name="user_circle_active"
              clickable
              onClickHandler={() => setUserListsActive(prev => !prev)}
            />
          ) : (
            <Icon
              name="user_circle_inactive"
              clickable
              onClickHandler={() => setUserListsActive(prev => !prev)}
            />
          )}
        </ButtonBox>
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

      {userListsActive && (
        <UserBox>
          <UsersParagraph>{GAME.USERS}(3)</UsersParagraph>

          <UserLists userLists={sampleUsers} />
        </UserBox>
      )}

      <ChatBox>
        <ChatLogBox ref={chatRef}>
          <ChatLists chatLists={chatLists} />
        </ChatLogBox>

        <ChatInputForm onKeyPress={onKeyPressHandler}>
          <TextareaInput
            placeholder="답을 입력해주세요"
            value={input}
            onChangeHandler={e => setInput(() => e.target.value)}
          />
        </ChatInputForm>
      </ChatBox>
    </GameLayout>
  );
}

export default Game;
