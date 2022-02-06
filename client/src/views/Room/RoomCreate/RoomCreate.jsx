import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROOM } from '../../../utils/costants';
import validate from '../../../utils/validate';

import Box from '../../../components/Box/Box';
import Icon from '../../../components/Icon/Icon';
import TextInput from '../../../components/Input/TextInput/TextInput';
import NoticeLabel from '../../../components/Label/NoticeLabel/NoticeLabel';

import { RoomCreateLayout, InputForm } from './RoomCreate.style';

function RoomCreate() {
  const navigate = useNavigate();

  const [condition, setCondition] = useState();
  const [nickname, setNickname] = useState();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const onConditionSubmitHandler = (event, _condition) => {
    event.preventDefault();

    if (!validate('condition', _condition)) {
      setError(() => ROOM.ERROR.CONDITION);
    } else {
      setError(() => null);
      setStep(() => 2);
    }
  };

  const onNickNameSubmitHandler = (event, _nickname) => {
    event.preventDefault();

    navigate('/game');
  };

  return (
    <RoomCreateLayout>
      <Icon name="logo_small" />

      {step === 1 && (
        <Box column size="lg">
          <InputForm
            onSubmit={event => onConditionSubmitHandler(event, condition)}
          >
            <NoticeLabel size="lg" text={ROOM.LABEL.CONDITION} />

            <TextInput
              type="number"
              placeholder={ROOM.PLACEHOLDER.CONDITION}
              value={condition}
              onChangeHandler={e => setCondition(e.target.value)}
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
    </RoomCreateLayout>
  );
}

export default RoomCreate;
