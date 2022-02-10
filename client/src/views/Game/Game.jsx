import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import { GAME, USER_ROLE } from '../../utils/costants';
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
  const [notice, setNotice] = useState();
  const [userLists, setUserLists] = useState({ userList: [], show: false });
  const [song, setSong] = useState();
  const [songContinued, setSongContinued] = useState(false);
  const [winner, setWinner] = useState();

  const [onKeyPressHandler, onSongPlayHandler, onSongStopHandler] = useSocketIO(
    user,
    setUser,
    setMessage,
    setChats,
    setNotice,
    setUserLists,
    setSong,
    setSongContinued,
    setWinner,
  );

  useScrollBottom(chatRef, chats);

  useEffect(() => {
    return () =>
      setUser({
        id: null,
        nickname: null,
        roomId: null,
        score: null,
        winningCondition: null,
        role: null,
      });
  }, []);

  return (
    <Row width="100%" height="100%" justify="center" align="center">
      {winner && (
        <Popup>
          <GameEndTemplate winner={winner} />
        </Popup>
      )}

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
            {user.role === USER_ROLE.HOST && !song && (
              <Icon
                name="play_small"
                clickable
                onClickHandler={() => onSongPlayHandler(user)}
              />
            )}

            {user.role === USER_ROLE.HOST && songContinued && (
              <Icon
                name="pause_small"
                clickable
                onClickHandler={() => onSongStopHandler(user)}
              />
            )}

            <Paragraph
              align="center"
              color="White"
              textStyle="Paragraph1"
              text={notice}
            />
          </Col>

          <ReactPlayer
            style={{ display: 'none' }}
            autoPlay
            url={`https://www.youtube.com/watch?v=${song}`}
            playing={!!song}
          />
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
