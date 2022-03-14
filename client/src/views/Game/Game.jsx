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
import Button from '../../components/Button/Button';
import Popup from '../../components/Popup/Popup';
import GameMenuTemplate from '../../components/Popup/Template/GameMenuTemplate/GameMenuTemplate';
import GameEndTemplate from '../../components/Popup/Template/GameEndTemplate/GameEndTemplate';
import GameInfoTemplate from '../../components/Popup/Template/GameInfoTemplate/GameInfoTemplate';
import GameSettingTemplate from '../../components/Popup/Template/GameSettingTemplate/GameSettingTemplate';
import Playing from '../../components/Playing/Playing';
import Loading from '../../components/Loading/Loading';

import { ChatLog, InputForm, StyledCol } from './Game.style';

function Game({ user, setUser }) {
  const navigate = useNavigate();

  const chatRef = useRef();

  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState();
  const [chats, setChats] = useState([]);
  const [notice, setNotice] = useState();
  const [userLists, setUserLists] = useState({ userList: [], show: false });
  const [gameMenuShow, setGameMenuShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(GAME.SETTING);
  const [song, setSong] = useState();
  const [songContinued, setSongContinued] = useState(false);
  const [skip, setSkip] = useState({ voted: false, total: null, agree: null });
  const [setting, setSetting] = useState({ volume: 40 });
  const [winner, setWinner] = useState();

  const [
    onKeyPressHandler,
    onSongPlayHandler,
    onSongStopHandler,
    onSkipHandler,
    onDisconnectHandler,
  ] = useSocketIO(
    user,
    setUser,
    setIsStarted,
    setIsLoading,
    setMessage,
    setChats,
    setNotice,
    setUserLists,
    setSong,
    setSongContinued,
    setSkip,
    setWinner,
  );

  useScrollBottom(chatRef, chats);

  useEffect(() => {
    const resetUser = () =>
      setUser({
        id: null,
        nickname: null,
        roomId: null,
        score: null,
        winningCondition: null,
        role: null,
      });

    return () => {
      onDisconnectHandler();
      resetUser();
    };
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Row width="100%" height="100%" justify="center" align="center">
      {winner && (
        <Popup>
          <GameEndTemplate winner={winner} />
        </Popup>
      )}

      {gameMenuShow && (
        <Popup>
          <GameMenuTemplate
            onClickHandler={() => setGameMenuShow(prev => !prev)}
            onChangeHandler={category => setSelectedCategory(() => category)}
            selectedCategory={selectedCategory}
          >
            {selectedCategory === GAME.SETTING && (
              <GameSettingTemplate
                onVolumeInputHandler={setSetting}
                setting={setting}
              />
            )}

            {selectedCategory === GAME.GAMEINFO && <GameInfoTemplate />}
          </GameMenuTemplate>
        </Popup>
      )}

      <Col flex={1} height="100%" align="center" padding="16px 32px">
        <Row width="100%">
          <Icon
            name="back_circle"
            clickable
            onClickHandler={() => navigate('/room')}
          />

          <Icon
            name="menu_circle"
            clickable
            onClickHandler={() => setGameMenuShow(prev => !prev)}
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

        <Col height="100%" justify="space-around" align="center">
          <Playing playing={!!song} />

          {!isStarted && (
            <Col justify="center" align="center" gap={5}>
              <Paragraph
                align="center"
                color="White"
                textStyle="Paragraph2"
                text={GAME.CODE}
              />

              <Paragraph
                align="center"
                color="White"
                textStyle="Paragraph2"
                text={user.roomId}
              />
            </Col>
          )}

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

            {song && !songContinued && skip.total !== skip.agree && (
              <Button
                type={skip.voted ? 'Primary' : 'Secondary'}
                text={`건너뛰기 ${skip.agree}/${skip.total}`}
                onClickHandler={() => onSkipHandler(user, skip.voted)}
              />
            )}
          </Col>

          <ReactPlayer
            style={{ display: 'none' }}
            autoPlay
            url={`https://www.youtube.com/watch?v=${song}`}
            playing={!!song}
            volume={setting.volume / 100}
            loop
          />
        </Col>
      </Col>

      {userLists.show && (
        <Col width="250px" height="100%" align="center" padding="0 5px">
          <UserLists userLists={userLists.userList} />
        </Col>
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
