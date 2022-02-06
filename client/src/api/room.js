import request from './request';
import { ROOM } from './url';

const Room = {
  checkCode(code) {
    return request('POST', ROOM.CODE, code);
  },

  checkNickname(nickname) {
    return request('POST', ROOM.NICKNAME, nickname);
  },
};

export default Room;
