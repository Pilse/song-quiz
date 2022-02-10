import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { GAME } from '../../utils/costants';
import useScrollBottom from '../../hooks/useScrollBottom';
import useSocketIO from '../../hooks/useSocketIO';

import Icon from '../../components/Icon/Icon';
import Col from '../../components/Layout/Col/Col';
import Row from '../../components/Layout/Row/Row';
import Paragraph from '../../components/Paragraph/Paragraph';
import TextareaInput from '../../components/Input/TextareaInput/TextareaInput';
import UserLists from '../../components/Lists/UserLists/UserLists';
import ChatLists from '../../components/Lists/ChatLists/ChatLists';
import Popup from '../../components/Popup/Popup';
import GameEndTemplate from '../../components/Popup/Template/GameEndTemplate/GameEndTemplate';

import { ChatLog, InputForm, StyledCol } from './Game.style';

function Game({ user, setUser }) {
  const navigate = useNavigate();

  const chatRef = useRef();

  const [message, setMessage] = useState();
  const [chats, setChats] = useState([]);
  const [quizMessage, setQuizMessage] = useState(GAME.START);
  const [userLists, setUserLists] = useState({ userList: [], show: false });

  const [onKeyPressHandler] = useSocketIO(
    user,
    setUser,
    setMessage,
    setChats,
    setUserLists,
  );

  useScrollBottom(chatRef, chats);

  return (
    <Row width="100%" height="100%" justify="center" align="center">
      <Col width="100%" height="100%" align="center" padding="16px 32px">
        <Row width="100%">
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
        </Row>

        <Col height="100%" justify="space-around">
          <Icon name="logo_medium" />

          <Col justify="center" align="center" gap={5}>
            <Paragraph
              align="center"
              color="White"
              textStyle="Paragraph4"
              text={GAME.CODE}
            />

            <Paragraph
              align="center"
              color="White"
              textStyle="Paragraph4"
              text={user.roomId}
            />
          </Col>

          <Col gap={32}>
            <Icon name="play_small" clickable />

            <Paragraph
              align="center"
              color="White"
              textStyle="Paragraph1"
              text={quizMessage}
            />
          </Col>
        </Col>
      </Col>

      {userLists.show && (
        <StyledCol
          width="200px"
          height="100%"
          align="center"
          gap={26}
          padding="35px 16px"
        >
          <Paragraph
            align="center"
            color="Primary"
            textStyle="Paragraph4"
            text={`${GAME.USERS} (${userLists.userList.length})`}
          />

          <UserLists userLists={userLists.userList} />
        </StyledCol>
      )}

      <StyledCol width="400px" height="100%">
        <ChatLog ref={chatRef}>
          {chats && (
            <ChatLists chatLists={chats} userNickname={user.nickname} />
          )}
        </ChatLog>

        <InputForm onKeyPress={e => onKeyPressHandler(e, message)}>
          <TextareaInput
            placeholder="답을 입력해주세요"
            value={message}
            onChangeHandler={e => setMessage(() => e.target.value)}
          />
        </InputForm>
      </StyledCol>

      <Popup>
        <GameEndTemplate winner="234" />
      </Popup>
    </Row>
  );
}

Game.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Game;
