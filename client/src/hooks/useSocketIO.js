import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { io } from 'socket.io-client';
import { USER_ROLE } from '../utils/costants';

function useSocketIO(
  user,
  setUser,
  setMessage,
  setChats,
  setNotice,
  setUserLists,
  setSong,
  setSongContinued,
  setWinner,
) {
  const socket = useMemo(
    () =>
      io('https://song-quiz.herokuapp.com', {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
      }),
    [],
  );

  const navigate = useNavigate();

  useEffect(() => {
    let roomId;
    let userId;

    if (!user.nickname) {
      socket.disconnect();
      navigate('/');
      return false;
    }

    if (user.role === USER_ROLE.HOST) {
      socket.emit('create', {
        nickname: user.nickname,
        winningCondition: user.winningCondition,
      });
    } else {
      socket.emit('join', {
        nickname: user.nickname,
        roomId: user.roomId,
      });
    }

    socket.on('user', userInfo => {
      roomId = userInfo.roomId;
      userId = userInfo.id;

      setUser(userInfo);
    });

    socket.on('users', players =>
      setUserLists(prev => ({
        ...prev,
        userList: players.map(player => ({
          nickname: player.nickname,
          score: player.score,
        })),
      })),
    );

    socket.on(
      'message',
      ({ nickname: _nickname, message: _message, type: _type }) =>
        setChats(prev => [
          ...prev,
          {
            type: _type,
            message: _message,
            nickname: _nickname,
          },
        ]),
    );

    socket.on('notice', notice => setNotice(() => notice));

    socket.on('play', song => setSong(() => song));

    socket.on('continue', songContinued =>
      setSongContinued(() => songContinued),
    );

    socket.on('end', winner => setWinner(winner));

    return () => socket.emit('leave', { roomId, userId });
  }, []);

  const onKeyPressHandler = (event, _message) => {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        event.preventDefault();

        if (_message) {
          socket.emit('message', {
            roomId: user.roomId,
            userId: user.id,
            message: _message,
          });
        }

        setMessage();
      } else if (!_message) {
        event.preventDefault();
      }
    }
  };

  const onSongPlayHandler = _user => {
    socket.emit('play', { roomId: _user.roomId, userId: _user.id });
  };

  const onSongStopHandler = _user => {
    socket.emit('stop', { roomId: _user.roomId });
  };

  return [onKeyPressHandler, onSongPlayHandler, onSongStopHandler];
}

export default useSocketIO;
