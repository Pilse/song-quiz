const conditionValidator = payload => {
  if (payload < 3) return false;
  if (payload > 10) return false;

  return true;
};

const nicknameValidator = () => {
  // TODO nickname 중복검사
  return true;
};

const validate = (type, payload) => {
  switch (type) {
    case 'condition':
      return conditionValidator(payload);

    case 'nickname':
      return nicknameValidator(payload);

    default:
      return true;
  }
};

export default validate;
