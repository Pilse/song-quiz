export const HOME = {
  TITLE: '노래맞히기',
};

export const ROOM = {
  CREATE: '방 만들기',
  ENTER: '입장하기',
  LABEL: {
    NICKNAME: '사용할 닉네임을 입력해주세요',
    CONDITION: '승리 점수 조건을 입력해주세요',
    CODE: '초대코드를 입력해주세요',
  },
  PLACEHOLDER: {
    NICKNAME: '사용할 닉네임을 입력해주세요',
    CONDITION: '승리 점수 조건을 입력해주세요(3 ~ 10)',
    CODE: '초대코드를 입력해주세요',
  },
  ERROR: {
    NICKNAME: '중복된 닉네임입니다',
    CONDITION: '3 ~ 10사이의 조건을 입력해주세요',
    CODE: '올바르지 않은 초대코드입니다',
    STARTED: '이미 게임이 시작되었습니다',
    DELETED: '방이 더이상 존재하지 않습니다',
  },
};

export const VALIDATE = {
  CONDITION: 'condition',
  NICKNAME: 'nickname',
  CODE: 'code',
};

export const USER_ROLE = {
  HOST: 'host',
  PLAYER: 'plyaer',
};

export const GAME = {
  START: '클릭하여 시작',
  CODE: '초대코드',
  USERS: '참가자',
  GAMESET: '게임종료',
  GAMEINFO: '게임정보',
  HOME: '홈으로 돌아가기',
  SETTING: '게임설정',
  TYPE: {
    NOTICE: 'notice',
    MESSAGE: 'message',
  },
};

export const INFO = {
  PLAY: [
    '답을 맞힌 후에도 노래를 계속 들을 수 있어요',
    '방장만이 노래를 멈추고 다음 노래를 재생할 수 있어요',
    '참가자 모두 건너뛰기에 동의하면 해당 노래를 건너 뛸 수 있어요',
  ],
  ANSWER: [
    '노래를 듣고 해당 노래의 제목을 맞혀주세요',
    '답은 띄어쓰기가 맞아야하고, 영어 제목의 경우에는 대소문자 구분은 하지 않아요',
  ],
  GAME: [
    '초대코드를 공유하여 친구들을 초대할 수 있어요',
    '게임이 시작하면 더 이상 방에 들어올 수 없어요',
    '방장이 설정한 문제 수 만큼 맞히면 승리해요',
  ],
};
