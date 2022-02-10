import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ROOM, USER_ROLE, VALIDATE } from '../../../utils/costants';
import validate from '../../../utils/validate';

import Box from '../../../components/Layout/Box/Box';
import Col from '../../../components/Layout/Col/Col';
import Icon from '../../../components/Icon/Icon';
import TextInput from '../../../components/Input/TextInput/TextInput';
import NoticeLabel from '../../../components/Label/NoticeLabel/NoticeLabel';

import { InputForm } from './RoomCreate.style';

function RoomCreate({ setUser }) {
  const navigate = useNavigate();

  const [condition, setCondition] = useState();
  const [nickname, setNickname] = useState();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const onConditionSubmitHandler = (event, _condition) => {
    event.preventDefault();

    if (!validate(VALIDATE.CONDITION, _condition)) {
      setError(() => ROOM.ERROR.CONDITION);
      setCondition();
    } else {
      setUser(prev => ({
        ...prev,
        winningCondition: _condition,
      }));

      setError(() => null);
      setStep(() => 2);
    }
  };

  const onNickNameSubmitHandler = (event, _nickname) => {
    event.preventDefault();

    setUser(prev => ({ ...prev, nickname: _nickname, role: USER_ROLE.HOST }));

    navigate('/game');
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
    </Col>
  );
}

RoomCreate.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default RoomCreate;
