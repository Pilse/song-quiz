import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROOM } from '../../utils/costants';

import Icon from '../../components/Icon/Icon';
import Box from '../../components/Box/Box';

import { RoomLayout, OptionBox, RoomOptionParagraph } from './Room.style';

function Room() {
  const navigate = useNavigate();

  return (
    <RoomLayout>
      <Icon name="logo_small" />

      <OptionBox>
        <Box column gap={25} size="md">
          <RoomOptionParagraph>{ROOM.CREATE}</RoomOptionParagraph>

          <Icon
            name="room_create"
            clickable
            onClickHandler={() => navigate('/room/create')}
          />
        </Box>

        <Box column gap={25} size="md">
          <RoomOptionParagraph>{ROOM.ENTER}</RoomOptionParagraph>

          <Icon
            name="room_enter"
            clickable
            onClickHandler={() => navigate('/room/enter')}
          />
        </Box>
      </OptionBox>
    </RoomLayout>
  );
}

export default Room;
