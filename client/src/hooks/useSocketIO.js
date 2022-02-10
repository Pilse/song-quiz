import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { io } from 'socket.io-client';
import { USER_ROLE } from '../utils/costants';

function useSocketIO(user, setUser, setMessage, setChats, setUserLists) {
  const socket = useMemo(
    () =>
      io('http://localhost:8000', {
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

    return () => socket.emit('leave', { roomId, userId });
  }, []);

  const onKeyPressHandler = (event, message) => {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        event.preventDefault();

        if (message) {
          socket.emit('message', {
            roomId: user.roomId,
            userId: user.id,
            message,
          });
        }

        setMessage();
      } else if (!message) {
        event.preventDefault();
      }
    }
  };
  return [onKeyPressHandler];
}

export default useSocketIO;
