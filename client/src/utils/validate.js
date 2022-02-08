import Room from '../api/room';

const conditionValidator = payload => {
  if (payload < 3) return false;
  if (payload > 10) return false;

  return true;
};

const nicknameValidator = async payload => {
  const { data: isDuplicated } = await Room.checkNickname(payload);

  return isDuplicated;
};

const codeValidator = async payload => {
  const { data: roomId } = await Room.checkCode({ code: payload });

  return roomId;
};

const validate = (type, payload) => {
  switch (type) {
    case 'condition':
      return conditionValidator(payload);

    case 'nickname':
      return nicknameValidator(payload);

    case 'code':
      return codeValidator(payload);

    default:
      return true;
  }
};

export default validate;
