import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ROOM, USER_ROLE, VALIDATE } from '../../../utils/costants';
import validate from '../../../utils/validate';

import Box from '../../../components/Layout/Box/Box';
import Icon from '../../../components/Icon/Icon';
import Col from '../../../components/Layout/Col/Col';
import TextInput from '../../../components/Input/TextInput/TextInput';
import NoticeLabel from '../../../components/Label/NoticeLabel/NoticeLabel';

import { InputForm } from './RoomEnter.style';

function RoomEnter({ user, setUser }) {
  const navigate = useNavigate();

  const [code, setCode] = useState();
  const [nickname, setNickname] = useState();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const onCodeSubmitHandler = async (event, _code) => {
    event.preventDefault();

    const { roomId, error: codeError } = await validate(VALIDATE.CODE, _code);

    if (codeError) {
      setError(() => ROOM.ERROR[codeError]);
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
        role: USER_ROLE.PLAYER,
      }));

      setError(() => null);
      navigate('/game');
    }
  };

  return (
    <Col
      width="100%"
      height="100%"
      align="center"
      gap={129}
      padding="64px 0 0 0"
    >
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
    </Col>
  );
}

RoomEnter.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default RoomEnter;
