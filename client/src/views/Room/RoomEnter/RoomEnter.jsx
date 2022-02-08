import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ROOM, USER_ROLE, VALIDATE } from '../../../utils/costants';
import validate from '../../../utils/validate';

import Box from '../../../components/Box/Box';
import Icon from '../../../components/Icon/Icon';
import TextInput from '../../../components/Input/TextInput/TextInput';
import NoticeLabel from '../../../components/Label/NoticeLabel/NoticeLabel';

import { RoomEnterLayout, InputForm } from './RoomEnter.style';

function RoomEnter({ user, setUser }) {
  const navigate = useNavigate();

  const [code, setCode] = useState();
  const [nickname, setNickname] = useState();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const onCodeSubmitHandler = async (event, _code) => {
    event.preventDefault();

    const roomId = await validate(VALIDATE.CODE, _code);

    if (!roomId) {
      setError(() => ROOM.ERROR.CODE);
      setCode();
    } else {
      setUser(prev => ({
        ...prev,
        roomId,
      }));

      setError(() => null);
      setStep(() => 2);
    }
  };

  const onNickNameSubmitHandler = async (event, _nickname) => {
    event.preventDefault();

    const isDuplicated = await validate(VALIDATE.NICKNAME, {
      roomId: user.roomId,
      nickname: _nickname,
    });

    if (!isDuplicated) {
      setError(() => ROOM.ERROR.NICKNAME);
      setNickname();
    } else {
      setUser(prev => ({
        ...prev,
        nickname: _nickname,
        role: USER_ROLE.USER,
      }));

      setError(() => null);
      navigate('/game');
    }
  };

  return (
    <RoomEnterLayout>
      <Icon name="logo_small" />

      {step === 1 && (
        <Box column size="lg">
          <InputForm onSubmit={event => onCodeSubmitHandler(event, code)}>
            <NoticeLabel size="lg" text={ROOM.LABEL.CODE} />

            <TextInput
              placeholder={ROOM.PLACEHOLDER.CODE}
              value={code}
              onChangeHandler={e => setCode(e.target.value)}
              error={error}
            />
          </InputForm>
        </Box>
      )}

      {step === 2 && (
        <Box column size="lg">
          <InputForm
            onSubmit={event => onNickNameSubmitHandler(event, nickname)}
          >
            <NoticeLabel size="lg" text={ROOM.LABEL.NICKNAME} />

            <TextInput
              placeholder={ROOM.PLACEHOLDER.NICKNAME}
              value={nickname}
              onChangeHandler={e => setNickname(e.target.value)}
              error={error}
            />
          </InputForm>
        </Box>
      )}
    </RoomEnterLayout>
  );
}

RoomEnter.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default RoomEnter;
