import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROOM } from '../../../utils/costants';
import validate from '../../../utils/validate';

import Box from '../../../components/Box/Box';
import Icon from '../../../components/Icon/Icon';
import TextInput from '../../../components/Input/TextInput/TextInput';
import NoticeLabel from '../../../components/Label/NoticeLabel/NoticeLabel';

import { RoomEnterLayout, InputForm } from './RoomEnter.style';

function RoomEnter() {
  const navigate = useNavigate();

  const [code, setCode] = useState();
  const [nickname, setNickname] = useState();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const onCodeSubmitHandler = async (event, _code) => {
    event.preventDefault();

    const result = await validate('code', _code);

    if (!result) {
      setError(() => ROOM.ERROR.CODE);
    } else {
      setError(() => null);
      setStep(() => 2);
    }
  };

  const onNickNameSubmitHandler = async (event, _nickname) => {
    event.preventDefault();

    const result = await validate('nickname', _nickname);

    if (!result) {
      setError(() => ROOM.ERROR.NICKNAME);
    } else {
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

export default RoomEnter;
