import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { GAME } from '../../utils/costants';
import useScrollBottom from '../../hooks/useScrollBottom';
import useSocketIO from '../../hooks/useSocketIO';

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

function Game({ user, setUser }) {
  const navigate = useNavigate();

  const chatRef = useRef();

  const [quizMessage, setQuizMessage] = useState(GAME.START);
  const [userLists, setUserLists] = useState({ userList: [], show: false });

  const { message, setMessage, onKeyPressHandler, chats } = useSocketIO(
    user,
    setUser,
    setUserLists,
  );

  useScrollBottom(chatRef, chats);

  return (
    <GameLayout>
      <QuizBox>
        <ButtonBox>
          <Icon
            name="back_circle"
            clickable
            onClickHandler={() => navigate(-1)}
          />

          {userLists.show ? (
            <Icon
              name="user_circle_active"
              clickable
              onClickHandler={() =>
                setUserLists(prev => ({ ...prev, show: !prev.show }))
              }
            />
          ) : (
            <Icon
              name="user_circle_inactive"
              clickable
              onClickHandler={() =>
                setUserLists(prev => ({ ...prev, show: !prev.show }))
              }
            />
          )}
        </ButtonBox>
        <Icon name="logo_large" />

        <QuizInfoBox>
          <CodeBox>
            <CodeParagraph>{GAME.CODE}</CodeParagraph>

            <CodeParagraph>{user.roomId}</CodeParagraph>
          </CodeBox>

          <Icon name="play" clickable />

          <QuizParagraph>{quizMessage}</QuizParagraph>
        </QuizInfoBox>
      </QuizBox>

      {userLists.show && (
        <UserBox>
          <UsersParagraph>
            {GAME.USERS} ({userLists.userList.length})
          </UsersParagraph>

          <UserLists userLists={userLists.userList} />
        </UserBox>
      )}

      <ChatBox>
        <ChatLogBox ref={chatRef}>
          {chats && (
            <ChatLists chatLists={chats} userNickname={user.nickname} />
          )}
        </ChatLogBox>

        <ChatInputForm onKeyPress={onKeyPressHandler}>
          <TextareaInput
            placeholder="답을 입력해주세요"
            value={message}
            onChangeHandler={e => setMessage(() => e.target.value)}
          />
        </ChatInputForm>
      </ChatBox>
    </GameLayout>
  );
}

Game.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Game;
